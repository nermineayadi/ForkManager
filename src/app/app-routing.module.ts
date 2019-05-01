//imports necessaires

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//import / login / inscription

import { LoginComponent } from "./auth/login/login.component";
import { InscriptionComponent } from "./auth/inscription/inscription.component";
import { InterfaceTestComponent } from './pages/InterfaceTest/InterfaceTest.component';
import { TestService } from './pages/InterfaceTest/InterfaceTest.service';
import { AuthGuard } from './services/guard.service';
import { ClientComponent } from './client/client.component';
import { ClientService } from './client/client.service';
const routes: Routes = [
      {
        path: "test",
        component: InterfaceTestComponent ,
        resolve:{test : TestService}
      },
      {
        path: "client",
        component: ClientComponent ,
        resolve:{client : ClientService}
      },

      {
        path: "login",
        component: LoginComponent
      },
      {
       
        path: "profile",
        component: InscriptionComponent,
        canActivate : [AuthGuard]

      },
      
      {
        path: "",
        loadChildren:"./pages/pages.module#PagesModule",
        canActivate : [AuthGuard]
      }
    ]
   
  
          
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
