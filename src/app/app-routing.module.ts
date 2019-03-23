//imports necessaires

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//import pages / login / inscription 

// import { PagesComponent } from "./pages/pages.component";
import { LoginComponent } from "./auth/login/login.component";
import { InscriptionComponent } from "./auth/inscription/inscription.component";

//imports of pages

// import { CuisinierComponent } from "./pages/cuisinier/cuisinier.component";
// import { ResponsableComponent } from "./pages/responsable/responsable.component";
// import { ServeurComponent } from "./pages/serveur/serveur.component";
// import { RespcomptoireComponent } from "./pages/respcomptoire/respcomptoire.component";
// import { ControlgestionComponent } from "./pages/controlgestion/controlgestion.component";
// import { BarmanComponent } from "./pages/barman/barman.component";

//imports of cuisine


// import { PlatCuisineComponent } from './pages/cuisinier/plat-cuisine/plat-cuisine.component';
// import { StockCuisineComponent } from './pages/cuisinier/stock-cuisine/stock-cuisine.component';
// import { MenuCuisineComponent } from './/pages/cuisinier/menu-cuisine/menu-cuisine.component';
// import { ReservationCuisineComponent } from './pages/cuisinier/reservation-cuisine/reservation-cuisine.component';
// import { CommandeCuisineComponent } from './pages/cuisinier/commande-cuisine/commande-cuisine.component';
// import { InventaireCuisineComponent } from './pages/cuisinier/inventaire-cuisine/inventaire-cuisine.component';
// import { AcceuilCuisineComponent } from './pages/cuisinier/acceuil-cuisine/acceuil-cuisine.component';


const routes: Routes = [
  {
    path: "",
    loadChildren :'./auth/login/login.module#LoginModule'  },
  {
    path: "inscription",
    loadChildren :'./auth/inscription/inscription.module#InscriptionModule'  },
  {
    path: "pages", loadChildren :'./pages/pages.module#PagesModule'
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
