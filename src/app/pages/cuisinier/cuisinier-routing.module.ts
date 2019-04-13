import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { PlatCuisineComponent } from "./plat-cuisine/plat-cuisine.component";
import { StockCuisineComponent } from "./stock-cuisine/stock-cuisine.component";
import { MenuCuisineComponent } from "./menu-cuisine/menu-cuisine.component";
import { ReservationCuisineComponent } from "./reservation-cuisine/reservation-cuisine.component";
import { CommandeCuisineComponent } from "./commande-cuisine/commande-cuisine.component";
import { InventaireCuisineComponent } from "./inventaire-cuisine/inventaire-cuisine.component";
import { AcceuilCuisineComponent } from "./acceuil-cuisine/acceuil-cuisine.component";
import { CuisinierComponent } from "./cuisinier.component";
import { PlatService } from './plat-cuisine/plat.service';
import { CommandeService } from './commande-cuisine/commande.service';

const routes: Routes = [
  {
    path: "",
    component: CuisinierComponent,
    children: [
      { path: "plats", component: PlatCuisineComponent,resolve:{plat : PlatService} },
      { path: "stock", component: StockCuisineComponent },
      { path: "menu", component: MenuCuisineComponent },
      { path: "reservation", component: ReservationCuisineComponent },
      { path: "commande", component: CommandeCuisineComponent },
      { path: "inventaire", component: InventaireCuisineComponent,resolve:{commande : CommandeService} },
      { path: "", component: AcceuilCuisineComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cuisineRoutingModule {}
