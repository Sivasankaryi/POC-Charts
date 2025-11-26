import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PiechartComponent } from './component/piechart/piechart.component';
import { BarchartComponent } from './component/barchart/barchart.component';
import { HomeComponent } from './component/home/home.component';
import { NotfoundComponent } from './component/notfound/notfound.component';

const routes: Routes = [{
  path:'', component:HomeComponent
},
{
path:'pie', component:PiechartComponent
},
{
  path:'bar', component:BarchartComponent
},
{
  path:'**', component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
