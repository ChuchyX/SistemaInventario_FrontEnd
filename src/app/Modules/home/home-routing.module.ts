import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'productos', loadChildren: () => import('../productos/productos.module').then(m => m.ProductosModule) },
    { path: 'ventas', loadChildren: () => import('../ventas/ventas.module').then(m => m.VentasModule) },
    { path: 'usuarios', loadChildren: () => import('../usuarios/usuarios.module').then(m => m.UsuariosModule) },
    { path: 'reportes', loadChildren: () => import('../reportes/reportes.module').then(m => m.ReportesModule) },
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
