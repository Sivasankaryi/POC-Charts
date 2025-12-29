import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PonService } from 'src/app/service/pon.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {

  totalPons : number = 380;
  ponsCapacityhits :number = 0;
  ponsHitsdata: any[] = [];


  constructor(
    private ponService: PonService,
    private router: Router
  ){}

  ngOnInit(): void{
    this.ponService.getPonData().subscribe(data=>{
      this.ponsHitsdata = data;
      this.ponsCapacityhits = this.ponsHitsdata.length;
    });
  }


  onPonClicks():void{
this.router.navigate(['/poncapacity'], {state:{data:this.ponsHitsdata}});
  }

}
