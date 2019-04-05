import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeurRoutingModule } from './serveur-routing.module';
import { ServeurComponent } from './serveur.component';
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    declarations: [ServeurComponent],
    imports: [CommonModule, ServeurRoutingModule, MatTabsModule,
        NavBarModule, FlexLayoutModule,
    ],
    exports: [],
    providers: [],
})
export class ServeurModule { }