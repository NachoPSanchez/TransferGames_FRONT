import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminJuegosComponent } from './admin-juegos/admin-juegos.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdministracionComponent } from './administracion.component';
import { AdministracionRoutingModule } from './administracion-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { EditJuegoComponent } from './edit-juego/edit-juego.component';
import { CreateUserComponent } from './create-user/create-user.component';



@NgModule({
  declarations: [
    AdministracionComponent,
    AdminJuegosComponent,
    AdminUsersComponent,
    AdminNavbarComponent,
    EditUserComponent,
    EditJuegoComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AdministracionRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    AdministracionComponent
  ],
  bootstrap: [AdministracionComponent]
})
export class AdministracionModule { }
