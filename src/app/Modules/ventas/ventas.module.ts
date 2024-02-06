import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentasRoutingModule } from './ventas-routing.module';
import { HomeVentasComponent } from './home-ventas/home-ventas.component';


@NgModule({
  declarations: [
    HomeVentasComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule
  ]
})
export class VentasModule { }
