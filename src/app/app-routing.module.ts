import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [

  {
    path : "" , component: LoginComponent
  },
  {
    path : "pages" , component: PagesComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
