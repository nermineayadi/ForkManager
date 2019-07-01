import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServeurComponent } from './serveur.component';
import { ShareService } from 'src/app/services/share.service';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AcceuilServeurComponent } from './acceuil-serveur/acceuil-serveur.component';
import { CmdServeurComponent } from './commande-serveur/commande-serveur.component';

const routes: Routes = [
    {
        path: "",
        component: ServeurComponent,
        resolve: { serveur: ShareService },
        children: [
            {
                path: "",
                component: AcceuilServeurComponent,
                resolve: { serveur: ShareService },
            }
            ,
            {
                path: "map",
                component: GoogleMapComponent,
                resolve: { serveur: ShareService },
            }
            ,
            {
                path: "cmd",
                component: CmdServeurComponent,
                resolve: { serveur: ShareService },
            }
        ]
    }]
    ;

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServeurRoutingModule { }
