import { Component, OnInit } from '@angular/core';
import * as Highcharts from  'highcharts';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent {

Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Employee Skill Distribution'
    },
    subtitle: {
      text: 'Variation of skills for an employees'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: { valueSuffix: '%' }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        type: 'pie',
        name: 'Skills',
        data: [
          { name: 'Angular', y: 40 },
          { name: 'React', y: 25 },
          { name: 'Node.js', y: 20 },
          { name: 'Python', y: 15 }
        ]
      }
    ]
  };
}
