import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages/pages.component";
import { LoginComponent } from "./auth/login/login.component";
import { InscriptionComponent } from "./auth/inscription/inscription.component";
import { CuisinierComponent } from "./pages/cuisinier/cuisinier.component";
import { SearchbarComponent } from "./searchbar/searchbar.component";
import { RecetteComponent } from "./pages/cuisinier/recette/recette.component";
import { StockComponent } from './pages/cuisinier/stock/stock.component';
import { MenuComponent } from './pages/cuisinier/menu/menu.component';
const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "pages",
    component: PagesComponent
  },
  {
    path: "inscription",
    component: InscriptionComponent
  },
  {
    path: "cuisine",
    component: CuisinierComponent,
    children: 
       [{ path: "plats", component: RecetteComponent },
       { path: "stock", component: StockComponent },
       { path: "menu", component: MenuComponent },


    ]
  },
  { path: "search", component: SearchbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
