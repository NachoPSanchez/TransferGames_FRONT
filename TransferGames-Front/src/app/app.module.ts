import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './shared/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './shared/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { JuegosComponent } from './core/components/views/juegos/juegos.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './core/components/views/home/home.component';
import { ForoComponent } from './core/components/views/foro/foro.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    JuegosComponent,
    HomeComponent,
    ForoComponent
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
