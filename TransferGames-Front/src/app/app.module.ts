import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentepruebaComponent } from './core/componenteprueba/componenteprueba.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForoComponent } from './core/foro/foro.component';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { JuegosComponent } from './core/components/views/juegos/juegos.component';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ComponentepruebaComponent,
    FooterComponent,
    HeaderComponent,
    ForoComponent,
    LoginComponent,
    RegisterComponent,
    JuegosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideRouter([
      {
        path:'juegos', component: JuegosComponent
      }
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
