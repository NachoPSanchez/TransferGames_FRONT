import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminJuegosComponent } from './admin-juegos/admin-juegos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdministracionComponent } from './administracion.component';
import { AuthRolGuard } from 'src/app/core/helpers/guards/auth-rol.guard';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditJuegoComponent } from './edit-juego/edit-juego.component';
import { CreateUserComponent } from './create-user/create-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdministracionComponent,
    canActivate: [AuthRolGuard],
    children: [
      { path: 'usuarios', component: AdminUsersComponent },
      { path: 'usuarios/edit-user', component: EditUserComponent },
      { path: 'usuarios/create-user', component: CreateUserComponent },
      { path: 'juegos', component: AdminJuegosComponent },
      { path: 'juegos/edit-juego', component: EditJuegoComponent },
      { path: '', redirectTo: 'usuarios', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
