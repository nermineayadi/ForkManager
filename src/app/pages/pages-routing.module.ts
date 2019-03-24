import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { CuisinierComponent } from "./cuisinier/cuisinier.component";
import { ControleComponent } from "./controle/controle.component";
import { PortionneurComponent } from "./portionneur/portionneur.component";
import { ResponsableComponent } from "./responsable/responsable.component";
import { ServeurComponent } from "./serveur/serveur.component";
import { ComptoireComponent } from "./comptoire/comptoire.component";
import { BarmanComponent } from "./barman/barman.component";
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
        path: "controle",
        loadChildren: "./controle/controle.module#ControleModule"
      },
      {
        path: "portion",
        component: PortionneurComponent
      },
      {
        path: "responsable",
        component: ResponsableComponent
      },
      {
        path: "serveur",
        component: ServeurComponent
      },
      {
        path: "comptoire",
        component: ComptoireComponent
      },
      {
        path: "bar",
        component: BarmanComponent
      }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
