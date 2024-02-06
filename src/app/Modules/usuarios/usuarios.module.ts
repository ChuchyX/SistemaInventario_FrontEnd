import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeUsuariosComponent } from './home-usuarios/home-usuarios.component';


@NgModule({
  declarations: [
    HomeUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule
  ]
})
export class UsuariosModule { }
