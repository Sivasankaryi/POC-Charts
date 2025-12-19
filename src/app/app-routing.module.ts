import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimechartComponent } from './component/timechart/timechart.component';
import { ColumnseriesComponent } from './component/columnseries/columnseries.component';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },   
  { path: 'timechart', component: TimechartComponent },
  { path: 'columnchart', component: ColumnseriesComponent },
  { path: 'region-details/:region', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
