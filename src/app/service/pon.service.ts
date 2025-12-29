import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PonService {

  constructor(private http: HttpClient) { }
  
    getPonData() {
    return this.http.get<any[]>('assets/pon.json');
  }

  getRegionData() {
    return this.http.get<any[]>('assets/column.json');
  }
}
