import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortionneurComponent } from './portionneur.component';

const routes: Routes = [
    { path: '', component: PortionneurComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortionneurRoutingModule {}
