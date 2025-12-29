import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HomeComponent } from './component/home/home.component';
import { ColumnseriesComponent } from './component/columnseries/columnseries.component';
import { DetailsComponent } from './component/details/details.component';
import { PoncapacityComponent } from './component/poncapacity/poncapacity.component';
import { PondetailsComponent } from './component/pondetails/pondetails.component';
import { RoutesdetailsComponent } from './component/routesdetails/routesdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PoncapacityComponent,
    PondetailsComponent,
    RoutesdetailsComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
