import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './core/components/views/juegos/juegos.component';

import { AuthGuard } from './core/helpers/guards/auth.guard';
import { ForoComponent } from './core/components/views/foro/foro.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { HomeComponent } from './core/components/views/home/home.component';



const routes: Routes = [
  {path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard]},
  {path: 'foro', component: ForoComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'home',component: HomeComponent},
  {path:'administracion',
  loadChildren: () => 
  import('./core/components/views/administracion/administracion.module').then((m) => m.AdministracionModule)},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
