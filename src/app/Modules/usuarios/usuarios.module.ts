import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { HomeUsuariosComponent } from './home-usuarios/home-usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterUserComponent } from './components/register-user/register-user.component';


@NgModule({
  declarations: [
    HomeUsuariosComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})
export class UsuariosModule { }
