import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortionneurComponent } from './portionneur.component';
import { StockPortionnageComponent } from './stock-portionnage/stock-portionnage.component';
import { InventairePortionnageComponent } from './inventaire-portionnage/inventaire-portionnage.component';
import { AcceuilPortionnageComponent } from './acceuil-portionnage/acceuil-portionnage.component';

const routes: Routes = [
    {
      path: "",
      component: PortionneurComponent,
      children: [
      { path: "stock", component: StockPortionnageComponent },
        { path: "inventaire", component: InventairePortionnageComponent },
        { path: "", component: AcceuilPortionnageComponent}
      ]
    }
  ];
  
  @NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

export class PortionneurRoutingModule {}
