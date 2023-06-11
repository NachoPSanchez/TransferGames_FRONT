import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro.component';
import { AuthGuard } from 'src/app/core/helpers/guards/auth.guard';
import { ForoMensajesComponent } from './foro-mensajes/foro-mensajes.component';
import { ForoCreateMensajesComponent } from './foro-create-mensajes/foro-create-mensajes.component';
import { ForoMisMensajesComponent } from './foro-mis-mensajes/foro-mis-mensajes.component';
import { ForoMisRespuestasComponent } from './foro-mis-respuestas/foro-mis-respuestas.component';

const routes: Routes = [
  {
    path: '',
    component: ForoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'mensajes', component: ForoMensajesComponent },
      { path: 'create-mensajes', component: ForoCreateMensajesComponent },
      { path: 'mis-mensajes', component: ForoMisMensajesComponent },
      { path: 'mis-respuestas', component: ForoMisRespuestasComponent },
      { path: '', redirectTo: 'mensajes', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoRoutingModule { }
