import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { authGuard } from './Guards/auth.guard';

const routes: Routes = [
    {path:'', component: AppComponent, children: [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'home', loadChildren: ()=> import('./Modules/home/home.module').then(m => m.HomeModule), canActivate: [authGuard]},
    {path: 'login', loadChildren: ()=> import('./Modules/Login/login.module').then(m => m.LoginModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
