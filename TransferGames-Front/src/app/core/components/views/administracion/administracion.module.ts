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



@NgModule({
  declarations: [
    AdministracionComponent,
    AdminJuegosComponent,
    AdminUsersComponent,
    AdminNavbarComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AdministracionRoutingModule,
    FormsModule
  ],
  exports:[
    AdministracionComponent
  ],
  bootstrap: [AdministracionComponent]
})
export class AdministracionModule { }
