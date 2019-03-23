import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeurRoutingModule } from './serveur-routing.module';
import { ServeurComponent } from './serveur.component';

@NgModule({
    declarations: [ServeurComponent],
    imports: [ CommonModule ,ServeurRoutingModule],
    exports: [],
    providers: [],
})
export class ServeurModule {}