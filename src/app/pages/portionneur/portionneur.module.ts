import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortionneurRoutingModule } from './portionneur-routing.module';
import { PortionneurComponent } from './portionneur.component';

@NgModule({
    declarations: [PortionneurComponent],
    imports: [ CommonModule,PortionneurRoutingModule],
    exports: [],
    providers: [],
})
export class PortionneurModule {}