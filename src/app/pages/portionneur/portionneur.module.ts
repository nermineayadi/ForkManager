import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortionneurRoutingModule } from './portionneur-routing.module';
import { PortionneurComponent } from './portionneur.component';
import { AcceuilPortionnageComponent } from './acceuil-portionnage/acceuil-portionnage.component';
import { StockPortionnageComponent } from './stock-portionnage/stock-portionnage.component';
import { InventairePortionnageComponent } from './inventaire-portionnage/inventaire-portionnage.component';
import { NavigationPortionneurComponent } from 'src/app/navigation/navigation-portionneur/navigation-portionneur.component';
import { NavBarModule } from 'src/app/navbar/navbar.module';
//assets
import { MatangModule } from "src/assets/matang.module";
@NgModule({
    declarations: [PortionneurComponent, AcceuilPortionnageComponent, StockPortionnageComponent, InventairePortionnageComponent
    ,NavigationPortionneurComponent,
    ],
    imports: [ CommonModule,PortionneurRoutingModule,NavBarModule,MatangModule ],
    exports: [],
    providers: [],
})
export class PortionneurModule {}