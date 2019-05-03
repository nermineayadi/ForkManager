import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServeurComponent } from './serveur.component';
import { ShareService } from 'src/app/services/share.service';

const routes: Routes = [
   {
    path: "",
    component: ServeurComponent,
    resolve:{serveur : ShareService}
   }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServeurRoutingModule {}
