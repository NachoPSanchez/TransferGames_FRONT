import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './core/components/views/juegos/juegos.component';
import { ForoComponent } from './core/foro/foro.component';
import { AuthGuard } from './core/helpers/guards/auth.guard';

const routes: Routes = [
  {path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard]},
  {path: 'foro', component: ForoComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'juegos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
