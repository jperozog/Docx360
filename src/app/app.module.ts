import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { PreciosComponent } from './components/precios/precios.component';
import { LandingComponent } from './components/landing/landing.component';
import { TerminosComponent } from './components/terminos/terminos.component';
import { ContactComponent } from './components/contact/contact.component';
import { FAQComponent } from './components/faq/faq.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import {IvyCarouselModule} from 'angular-responsive-carousel';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    PreciosComponent,
    LandingComponent,
    TerminosComponent,
    ContactComponent,
    FAQComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    IvyCarouselModule
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
