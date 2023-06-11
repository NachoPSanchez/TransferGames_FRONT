import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForoComponent } from './foro.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ForoRoutingModule } from './foro-routing.module';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ForoMensajesComponent } from './foro-mensajes/foro-mensajes.component';
import { ForoNavbarComponent } from './foro-navbar/foro-navbar.component';



@NgModule({
  declarations: [
    ForoComponent,
    ForoMensajesComponent,
    ForoNavbarComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ForoRoutingModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  exports:[
    ForoComponent
  ],
})
export class ForoModule { }
