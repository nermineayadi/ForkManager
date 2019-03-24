import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResponsableComponent } from './responsable.component';
import { AcceuilResponsableComponent } from './acceuil-responsable/acceuil-responsable.component';
import { PlatResponsableComponent } from './plat-responsable/plat-responsable.component';
import { BoissonResponsableComponent } from './boisson-responsable/boisson-responsable.component';
import { PortionResponsableComponent } from './portion-responsable/portion-responsable.component';
import { ReservationResponsableComponent } from './reservation-responsable/reservation-responsable.component';
import { PersonnelResponsableComponent } from './personnel-responsable/personnel-responsable.component';
import { MenuResponsableComponent } from './menu-responsable/menu-responsable.component';
import { InventaireResponsableComponent } from './inventaire-responsable/inventaire-responsable.component';

const routes: Routes = [
    {
        path: "",
        component: ResponsableComponent,
        children: [
          { path: "", component: AcceuilResponsableComponent },
          { path: "plats", component: PlatResponsableComponent },
          { path: "boissons", component: BoissonResponsableComponent },
          { path: "menu", component: MenuResponsableComponent },
          { path: "portions", component: PortionResponsableComponent },
          { path: "reservations", component: ReservationResponsableComponent },
          { path: "personnels", component: PersonnelResponsableComponent },
          { path: "inventaire", component: InventaireResponsableComponent },

        ]
      }
]
  

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResponsableRoutingModule {}
