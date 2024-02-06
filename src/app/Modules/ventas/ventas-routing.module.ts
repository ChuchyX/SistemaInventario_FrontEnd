import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeVentasComponent } from './home-ventas/home-ventas.component';

const routes: Routes = [
  {path:'', component: HomeVentasComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VentasRoutingModule { }
