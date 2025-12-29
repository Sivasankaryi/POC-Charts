import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { PonService } from 'src/app/service/pon.service';

declare var $: any;

@Component({
  selector: 'app-poncapacity',
  templateUrl: './poncapacity.component.html',
  styleUrls: ['./poncapacity.component.css']
})
export class PoncapacityComponent implements OnInit, OnDestroy {

  tableData: any[] = [];
  dataTable: any;

  constructor(
    private pons: PonService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pons.getPonData().subscribe(data => {
      this.tableData = data;

      setTimeout(() => {
        this.dataTable = $('#ponTable').DataTable();
      }, 0);
    });
  }

goToDetails(type: 'SYSTEM' | 'INTERFACE', value: string, systemId: string) {
  if (!systemId) {
    console.error('System ID missing', { type, value });
    return;
  }
this.router.navigate(['/routesdetails', 'PON', systemId]);
}
goBackToHealth(){
  this.router.navigate(['/health']);
}

  ngOnDestroy(): void {
    if (this.dataTable) {
      this.dataTable.destroy();
    }
  }
}
