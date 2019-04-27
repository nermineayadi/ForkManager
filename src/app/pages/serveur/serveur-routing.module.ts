import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServeurComponent } from './serveur.component';
import { ServeurService } from './serveur.service';

const routes: Routes = [
   {
    path: "",
    component: ServeurComponent,
    resolve : {
        serveur : ServeurService
    }
   }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServeurRoutingModule {}
