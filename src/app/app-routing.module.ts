import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimechartComponent } from './component/timechart/timechart.component';
import { ColumnseriesComponent } from './component/columnseries/columnseries.component';
import { HomeComponent } from './component/home/home.component';
import { DetailsComponent } from './component/details/details.component';
import { HealthComponent } from './component/health/health.component';
import { PoncapacityComponent } from './component/poncapacity/poncapacity.component';
import { PondetailsComponent } from './component/pondetails/pondetails.component';
import { RoutesdetailsComponent } from './component/routesdetails/routesdetails.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },   
  { path: 'timechart', component: TimechartComponent },
  { path: 'columnchart', component: ColumnseriesComponent },
  { path: 'region-details/:id', component: DetailsComponent },
  {path:'health',component:HealthComponent},
  {path:'poncapacity',component:PoncapacityComponent},
  {path: 'pondetails/:systemId', component: PondetailsComponent },
  {path: 'routesdetails/:type/:id',component:RoutesdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
