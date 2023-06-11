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
import { AlertFill, AlertOutline, PlayCircleFill, PlayCircleOutline } from '@ant-design/icons-angular/icons';
import { PuntuacionesComponent } from './core/components/views/puntuaciones/puntuaciones.component';

const icons: IconDefinition[] = [ PlayCircleOutline,PlayCircleFill, AlertOutline, AlertFill ];



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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    NzButtonModule,
    NzIconModule.forRoot(icons),     
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
