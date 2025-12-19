import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

@Component({
  selector: 'app-columnseries',
  standalone: true,
  imports: [CommonModule, HighchartsChartModule],
  templateUrl: './columnseries.component.html',
  styleUrls: ['./columnseries.component.css']
})
export class ColumnseriesComponent {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;
  tableData: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router   
  ) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/column.json').subscribe(res => {

      const data = res.filter(r => !r.isDeleted);
      this.tableData = data;

      const categories = data.map(r => r.name);
      const rxData = data.map(r => r.rxDis ?? 0);
      const txData = data.map(r => r.txDis ?? 0);

      this.chartOptions = {
        chart: {
          type: 'column',
          height: 400
        },
        title: {
          text: 'Packets Discarded By Region'
        },
        xAxis: {
          categories,
          labels: { rotation: -45 }
        },
        yAxis: {
          min: 0,
          title: { text: 'Discarded Count' }
        },
        tooltip: {
          shared: true
        },
        series: [
          {
            name: 'Received Discarded Packets',
            type: 'column',
            data: rxData,
            point: {
              events: {
                click: (e: any) => {
                  const region = e.point.category;
                  this.goToDetails(region);
                }
              }
            }
          },
          {
            name: 'Transmitted Discarded Packets',
            type: 'column',
            data: txData,
            point: {
              events: {
                click: (e: any) => {
                  const region = e.point.category;
                  this.goToDetails(region);
                }
              }
            }
          }
        ],
        credits: { enabled: false }
      };
    });
  }

  goToDetails(region: string) {
    this.router.navigate(['/region-details', region]);
  }
}
