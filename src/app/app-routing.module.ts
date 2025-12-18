import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimechartComponent } from './component/timechart/timechart.component';

const routes: Routes = [
  {
    path:'', redirectTo:'timechart', pathMatch:'full'
  },
  {
    path:'timechart',component:TimechartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
