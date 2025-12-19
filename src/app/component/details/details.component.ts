import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  regionName!: string;
  regionData: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.regionName = this.route.snapshot.paramMap.get('region')!;

    this.http.get<any[]>('assets/column.json').subscribe(res => {
      this.regionData = res.find(r => r.name === this.regionName);
    });
  }

  close() {
    this.router.navigate(['/']);
  }
}
