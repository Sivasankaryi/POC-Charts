import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-timechart',
  standalone: true,
  imports: [HighchartsChartModule],
  templateUrl: './timechart.component.html',
  styleUrls: ['./timechart.component.css']
})
export class TimechartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  chartRef!: Highcharts.Chart;
  showAllChecked = false;
  showAllIndeterminate = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadChart();
  }

  loadChart() {
    this.http.get<any[]>('assets/time.json').subscribe(data => {

      const first = data[0];
      const invRatios: string[] = first.inv_ratios || [];
      const hiddenSeries = invRatios
        .map(k => keyvalue[k])
        .filter(Boolean);

      const txDis: any[][] = [];
      const rxErr: any[][] = [];
      const txErr: any[][] = [];
      const usRate: any[][] = [];
      const dsRate: any[][] = [];

      data.forEach(d => {
        const t = d.timestamp * 1000;
        txDis.push([t, d.tx_dis || 0]);
        rxErr.push([t, d.rx_err || 0]);
        txErr.push([t, d.tx_err || 0]);
        usRate.push([t, d.us_rate || 0]);
        dsRate.push([t, d.ds_rate || 0]);
      });

      const component = this;

      this.chartOptions = {
        chart: {
          zoomType: 'x',
          events: {
            load: function () {
              component.chartRef = this; 
              component.syncShowAllFromChart();
            }
          }
        } as Highcharts.ChartOptions,

        title: { text: 'Time Series Chart' },
// visibility over angular state
        plotOptions: {
          series: {
            events: {
              legendItemClick: function () {
                setTimeout(() => component.syncShowAllFromChart(), 0);
              }
            }
          }
        },

        xAxis: { type: 'datetime' },

        yAxis: [
          { title: { text: 'Count' } },
          { title: { text: 'Rate' }, opposite: true }
        ],

        series: [
          {
            name: 'Transmit Discards',
            type: 'line',
            data: txDis,
            visible: !hiddenSeries.includes('Transmit Discards')
          },
          {
            name: 'Receive Errors',
            type: 'line',
            data: rxErr,
            visible: !hiddenSeries.includes('Receive Errors')
          },
          {
            name: 'Transmit Errors',
            type: 'line',
            data: txErr,
            visible: !hiddenSeries.includes('Transmit Errors')
          },
          {
            name: 'Upstream Rate',
            type: 'line',
            data: usRate,
            yAxis: 1
          },
          {
            name: 'Downstream Rate',
            type: 'line',
            data: dsRate,
            yAxis: 1
          }
        ]
      };
    });
  }
  syncShowAllFromChart() {
    const visible = this.chartRef.series.filter(s => s.visible).length; 
    const total = this.chartRef.series.length;
    if (visible === 0) {
      this.showAllChecked = false;
      this.showAllIndeterminate = false;
    } else if (visible === total) {
      this.showAllChecked = true;
      this.showAllIndeterminate = false;
    } else {
      this.showAllChecked = false;
      this.showAllIndeterminate = true; 
    }
  }

  toggleShowAll(event: Event) {
    const checked = (event.target as HTMLInputElement).checked;

    this.chartRef.series.forEach(s => {
      s.setVisible(checked,   false);
    });

    this.chartRef.redraw();
    this.syncShowAllFromChart();
  }
}
 
const keyvalue: Record<string, string> = {
  tx_dis: 'Transmit Discards',
  rx_err: 'Receive Errors',
  tx_err: 'Transmit Errors',
  us_rate: 'Upstream Rate',
  ds_rate: 'Downstream Rate',
  tx_dis_rate: 'Transmit Discards',
  rx_err_rate: 'Receive Errors',
  tx_err_rate: 'Transmit Errors'
};
