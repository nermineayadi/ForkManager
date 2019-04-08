import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeurRoutingModule } from './serveur-routing.module';
import { ServeurComponent } from './serveur.component';
import { MatangModule } from 'src/assets/matang.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [ServeurComponent],
    imports: [ CommonModule ,ServeurRoutingModule,  CommonModule,
        //flex
        FlexLayoutModule,
        MatangModule
      ],
    exports: [],
    providers: [],
})
export class ServeurModule { }