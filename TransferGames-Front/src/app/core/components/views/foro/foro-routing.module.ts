import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForoComponent } from './foro.component';
import { AuthGuard } from 'src/app/core/helpers/guards/auth.guard';
import { ForoMensajesComponent } from './foro-mensajes/foro-mensajes.component';

const routes: Routes = [
  {
    path: '',
    component: ForoComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'mensajes', component: ForoMensajesComponent },
      { path: '', redirectTo: 'mensajes', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForoRoutingModule { }
