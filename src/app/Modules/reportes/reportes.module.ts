import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportesRoutingModule } from './reportes-routing.module';
import { HomeReportesComponent } from './home-reportes/home-reportes.component';


@NgModule({
  declarations: [
    HomeReportesComponent
  ],
  imports: [
    CommonModule,
    ReportesRoutingModule
  ]
})
export class ReportesModule { }
