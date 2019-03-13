import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './auth/login/login.component';
import { InscriptionComponent } from './auth/inscription/inscription.component';
const routes: Routes = [

  {
    path : "" , component: LoginComponent
  },
  {
    path : "pages" , component: PagesComponent 
  },
  {
    path : "inscription" , component: InscriptionComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
