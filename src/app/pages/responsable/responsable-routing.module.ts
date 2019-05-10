import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResponsableComponent } from './responsable.component';
import { AcceuilResponsableComponent } from './acceuil-responsable/acceuil-responsable.component';
import { PlatResponsableComponent } from './plat-responsable/plat-responsable.component';
import { BoissonResponsableComponent } from './boisson-responsable/boisson-responsable.component';
import { ReservationResponsableComponent } from './reservation-responsable/reservation-responsable.component';
import { PersonnelResponsableComponent } from './personnel-responsable/personnel-responsable.component';
import { SrecettesResponsableComponent } from './srecette-responsable/srecette-responsable.component';
import { InventaireResponsableComponent } from './inventaire-responsable/inventaire-responsable.component';
import { ShareService } from 'src/app/services/share.service';
import { IngredientResponsableComponent } from './ingredient-responsable/ingredient-responsable.component';
IngredientResponsableComponent
const routes: Routes = [
    {
        path: "",
        component: ResponsableComponent,
        children: [
          { path: "", component: AcceuilResponsableComponent,resolve:{acceuil : ShareService}  },
          { path: "plats", component: PlatResponsableComponent,resolve:{plat : ShareService}  },
          { path: "boissons", component: BoissonResponsableComponent,resolve:{boisson : ShareService}  },
          { path: "srecettes", component: SrecettesResponsableComponent,resolve:{srecette : ShareService}  },
          { path: "ingredients", component: IngredientResponsableComponent ,resolve:{ingredient : ShareService} },
          { path: "reservations", component: ReservationResponsableComponent,resolve:{reservation : ShareService}  },
          { path: "personnels", component: PersonnelResponsableComponent,resolve:{personnel : ShareService}  },
          { path: "inventaire", component: InventaireResponsableComponent ,resolve:{inventaire : ShareService} },

        ]
      }
]
  

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResponsableRoutingModule {}
