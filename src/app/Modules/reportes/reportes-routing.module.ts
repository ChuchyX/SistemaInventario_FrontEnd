import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeReportesComponent } from './home-reportes/home-reportes.component';

const routes: Routes = [
  {path:'', component: HomeReportesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportesRoutingModule { }
