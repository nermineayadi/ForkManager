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
import { ShareService } from 'src/app/services/share.service';

const routes: Routes = [
  {
    path: "",
    component: CuisinierComponent,
    children: [
      { path: "plats", component: PlatCuisineComponent,resolve:{plat : ShareService} },
      { path: "stock", component: StockCuisineComponent,resolve:{stock : ShareService} },
      { path: "srecettes", component: MenuCuisineComponent,resolve:{srecette : ShareService} },
      { path: "reservation", component: ReservationCuisineComponent ,resolve:{reservation : ShareService}},
      { path: "commande", component: CommandeCuisineComponent,resolve:{commande : ShareService} },
      { path: "inventaire", component: InventaireCuisineComponent ,resolve:{inventaire : ShareService}},
      { path: "", component: AcceuilCuisineComponent,resolve:{acceuil : ShareService} }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class cuisineRoutingModule {}
