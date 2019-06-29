import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ServeurComponent } from './serveur.component';
import { ShareService } from 'src/app/services/share.service';
import { GoogleMapComponent } from './google-map/google-map.component';

const routes: Routes = [
   {
    path: "",
    component: ServeurComponent,
    resolve:{serveur : ShareService},
    children: [
        {
            path: "golf-map",
            loadChildren: "./google-map/google-map.module#GoogleMapModule"
        }
        ,
        {
            path: "golf-cmd",
            loadChildren: "./google-map/google-map.module#GoogleMapModule"
        }
]}]
;

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ServeurRoutingModule {}
