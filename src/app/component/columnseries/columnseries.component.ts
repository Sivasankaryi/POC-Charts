import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class ColumnseriesComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  tableData: any[] = [];
  pagedData: any[] = [];
  pageSize = 5;
  currentPage = 1;
  totalPages = 0;
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';
  chatIsLoaded: boolean =  false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    fetch('assets/column.json')
      .then(res => res.json())
      .then(res => {
        this.tableData = res;
        this.totalPages = Math.ceil(this.tableData.length / this.pageSize);
        this.updatePage();
        this.prepareChart(res);
      });
  }

  prepareChart(data: any[]) {
    const categories = data.map(d => d.name);

    const rxData = data.map(d => ({
      y: d.rxDis ?? 0,
      name: d.name,
      id: d.id,
      isDeleted: d.isDeleted,
      color: d.isDeleted ? '#cccccc' : undefined
    }));

    const txData = data.map(d => ({
      y: d.txDis ?? 0,
      name: d.name,
      id: d.id,
      isDeleted: d.isDeleted,
      color: d.isDeleted ? '#cccccc' : undefined
    }));

        setTimeout(() => {
    this.chartOptions = {
      chart: {
        type: 'column',
        height: 400,
        scrollablePlotArea: {
          minWidth: categories.length * 120,
          scrollPositionX: 0
        }
      },
      title: {
        text: 'Packets Discarded By Region'
      },
      xAxis: {
        categories,
        scrollbar: { enabled: true }
      },
      yAxis: {
        min: 0,
        title: { text: 'Discarded Count' }
      },
      tooltip: {
        formatter: function () {
          if ((this.point as any).isDeleted) {
            return `<b>${this.x}</b><br/>Status: Deleted`;
          }
          return `<b>${this.x}</b><br/>Value: ${this.y}`;
        }
      },
      plotOptions: {
        column: {
          point: {
            events: {
              mouseOver: function () {
                const chartEl = this.series.chart.container;

                if ((this as any).isDeleted) {
                  chartEl.style.cursor = 'url(assets/block.png), not-allowed';
                } else {
                  chartEl.style.cursor = 'pointer';
                }
              },
              mouseOut: function () {
                this.series.chart.container.style.cursor = 'default';
              },
              click: function () {
                if ((this as any).isDeleted) {
                  return;
                }

                const id = (this as any).id;
                const name = (this as any).name;

                window.location.href =
                  `/region-details/${id}`;
              }
            }
          }
        }
      }
      ,
      series: [
        {
          name: 'Received Discarded Packets',
          type: 'column',
          data: rxData
        },
        {
          name: 'Transmitted Discarded Packets',
          type: 'column',
          data: txData
        },
      ],
      credits: { enabled: false }
    };
    this.chatIsLoaded = true;
  }, 500);
  }

  updatePage(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedData = this.tableData.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePage();
    }
  }

  sortBy(column: string): void {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.tableData.sort((a, b) => {
      const valA = a[column];
      const valB = b[column];

      if (valA < valB) return this.sortDirection === 'asc' ? -1 : 1;
      if (valA > valB) return this.sortDirection === 'asc' ? 1 : -1;
      return 0;
    });

    this.updatePage();
  }

  goToDetails(id: string, name: string): void {
    this.router.navigate(['/routesdetails', 'REGION', id]);
  }
}
