import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { JuegosComponent } from './core/components/views/juegos/juegos.component';
import { HomeComponent } from './core/components/views/home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ToastrModule } from 'ngx-toastr';
import { JuegoComponent } from './core/components/views/juegos/juego/juego.component';
import { NzButtonModule} from 'ng-zorro-antd/button'
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { IconDefinition } from '@ant-design/icons-angular';
import { AlertFill, AlertOutline, DoubleRightOutline, PlayCircleFill, PlayCircleOutline, RightOutline } from '@ant-design/icons-angular/icons';
import { PuntuacionesComponent } from './core/components/views/puntuaciones/puntuaciones.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { EditPerfilComponent } from './core/components/views/edit-perfil/edit-perfil.component';
import { NgxAwesomePopupModule,DialogConfigModule,ConfirmBoxConfigModule,ToastNotificationConfigModule} from '@costlydeveloper/ngx-awesome-popup';




const icons: IconDefinition[] = [ RightOutline,DoubleRightOutline,PlayCircleOutline,PlayCircleFill, AlertOutline, AlertFill ];



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    JuegosComponent,
    HomeComponent,
    JuegoComponent,
    PuntuacionesComponent,
    EditPerfilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    NzButtonModule,
    NzCollapseModule,
    NzIconModule.forRoot(icons),     
    ToastrModule.forRoot(),
    NgxAwesomePopupModule.forRoot(), // Essential, mandatory main module.
    DialogConfigModule.forRoot(), // Needed for instantiating dynamic components.
    ConfirmBoxConfigModule.forRoot(), // Needed for instantiating confirm boxes.
    ToastNotificationConfigModule.forRoot() // Needed for instantiating toast notifications.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
