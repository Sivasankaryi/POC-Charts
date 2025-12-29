import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PonService } from 'src/app/service/pon.service';

@Component({
  selector: 'app-routesdetails',
  templateUrl: './routesdetails.component.html',
  styleUrls: ['./routesdetails.component.css']
})
export class RoutesdetailsComponent {
 data: any;
  type!: string;
  id!: string;

  constructor(
    private route: ActivatedRoute,
    private ponService: PonService,
    private router: Router,
  ) {}

 ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    this.type = params.get('type')!;
    this.id = params.get('id')!;

    this.loadData();
  });
}

loadData(): void {
  if (this.type === 'PON') {
    this.ponService.getPonData().subscribe(res => {
      this.data = res.find(x => x.systemId === this.id);
    });
  }

  if (this.type === 'REGION') {
    this.ponService.getRegionData().subscribe(res => {
      this.data = res.find(x => x.id === this.id);
    });
  }
}

 close() {
    this.router.navigate(['/poncapacity']);
  }

}
