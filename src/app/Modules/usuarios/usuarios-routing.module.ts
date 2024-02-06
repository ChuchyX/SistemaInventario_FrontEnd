import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeUsuariosComponent } from './home-usuarios/home-usuarios.component';

const routes: Routes = [
  {path:'', component: HomeUsuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
