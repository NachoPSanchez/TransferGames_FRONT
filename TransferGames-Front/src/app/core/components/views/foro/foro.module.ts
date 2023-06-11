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
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { RightOutline, DoubleRightOutline, PlayCircleOutline, PlayCircleFill, AlertOutline, AlertFill } from '@ant-design/icons-angular/icons';
import { ForoCreateMensajesComponent } from './foro-create-mensajes/foro-create-mensajes.component';
import { ForoMisMensajesComponent } from './foro-mis-mensajes/foro-mis-mensajes.component';
import { ForoMisRespuestasComponent } from './foro-mis-respuestas/foro-mis-respuestas.component';

const icons: IconDefinition[] = [ RightOutline,DoubleRightOutline,PlayCircleOutline,PlayCircleFill, AlertOutline, AlertFill ];

@NgModule({
  declarations: [
    ForoComponent,
    ForoMensajesComponent,
    ForoNavbarComponent,
    ForoCreateMensajesComponent,
    ForoMisMensajesComponent,
    ForoMisRespuestasComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ForoRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    NzButtonModule,
    NzCollapseModule,
    NzIconModule.forRoot(icons)  
  ],
  exports:[
    ForoComponent
  ],
})
export class ForoModule { }
