import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "cuisine",
        loadChildren: "./cuisinier/cuisinier.module#CuisineModule"
      },
      {
        path: "responsable",
        loadChildren: "./responsable/responsable.module#ResponsableModule"
      },
      {
        path: "serveur",
        loadChildren: "./serveur/serveur.module#ServeurModule"
      },
     
      {
        path: "bar",
        loadChildren: "./barman/barman.module#BarmanModule"
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
