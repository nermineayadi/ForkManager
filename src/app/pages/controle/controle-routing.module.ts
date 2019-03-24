import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ControleComponent } from './controle.component';
import { AcceuilControleComponent } from './acceuil-controle/acceuil-controle.component';
import { PlatControleComponent } from './plat-controle/plat-controle.component';
import { MenuControleComponent } from './menu-controle/menu-controle.component';
import { ReservationControleComponent } from './reservation-controle/reservation-controle.component';
import { PortionControleComponent } from './portion-controle/portion-controle.component';
import { BoissonControleComponent } from './boisson-controle/boisson-controle.component';
import { PersonnelControleComponent } from './personnel-controle/personnel-controle.component';

const routes: Routes = [{
    path: "",
    component: ControleComponent,
    children: [
      { path: "", component: AcceuilControleComponent },
      { path: "plats", component: PlatControleComponent },
      { path: "boissons", component: BoissonControleComponent },
      { path: "menu", component: MenuControleComponent },
      { path: "protions", component: PortionControleComponent },
      { path: "reservations", component: ReservationControleComponent },
      { path: "personnels", component: PersonnelControleComponent },
      
    ]
  }
   
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ControleRoutingModule {}
