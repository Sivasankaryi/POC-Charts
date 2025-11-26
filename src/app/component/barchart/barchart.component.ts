import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Employee Skill Levels'
    },
    xAxis: {
      categories: ['Angular', 'React', 'Node.js', 'Python'],
      title: { text: 'Skills' }
    },
    yAxis: {
      min: 0,
      title: { text: 'Number of Employees' }
    },
    tooltip: {
      pointFormat: '<b>{point.y}</b> employees'
    },
    series: [
      {
        type: 'column',
        name: 'Employees',
        data: [10, 6, 4, 3] 
      }
    ]
  };

}
