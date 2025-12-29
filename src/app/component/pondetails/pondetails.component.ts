import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PonService } from 'src/app/service/pon.service';


@Component({
  selector: 'app-pondetails',
  templateUrl: './pondetails.component.html',
  styleUrls: ['./pondetails.component.css']
})
export class PondetailsComponent implements OnInit {
 systemId!: string;
  type!: string;
  value!: string;

  ngOnInit(): void {
    this.systemId = this.route.snapshot.paramMap.get('systemId')!;

    const nav = history.state;
    this.type = nav.type;
    this.value = nav.value;
  }

  constructor(private route: ActivatedRoute) {}

  close() {
    window.history.back();
  }
}
