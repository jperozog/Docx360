import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './components/login/login.component'
import {RegistroComponent} from './components/registro/registro.component'
import {TerminosComponent} from './components/terminos/terminos.component'
import {FAQComponent} from './components/faq/faq.component'
import {ContactComponent} from './components/contact/contact.component'
import {PreciosComponent} from './components/precios/precios.component'
import {LandingComponent} from './components/landing/landing.component'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'terminos', component: TerminosComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'home', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
