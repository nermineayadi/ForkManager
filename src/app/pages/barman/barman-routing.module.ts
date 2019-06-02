import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BarmanComponent } from './barman.component';
import { BoissonBarComponent} from "./boisson-bar/boisson-bar.component";
import { StockBarComponent } from "./stock-bar/stock-bar.component";
import { CommandeBarComponent } from "./commande-bar.service.ts/commande-bar.component";
import {  InventraireBarComponent } from "./inventraire-bar/inventraire-bar.component";
import { AcceuilBarComponent} from "./acceuil-bar/acceuil-bar.component";
import { ShareService } from 'src/app/services/share.service';

const routes: Routes = [
    {
      path: "",
      component: BarmanComponent,
      children: [
        { path: "boisson", component: BoissonBarComponent,resolve:{boisson : ShareService} },
        { path: "stock", component: StockBarComponent },
        { path: "commande", component: CommandeBarComponent,resolve:{commande : ShareService} },
        { path: "inventaire", component: InventraireBarComponent,resolve:{inventaire : ShareService}  },
        { path: "", component: AcceuilBarComponent }
      ]
    }
  ];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BarmanRoutingModule {}
