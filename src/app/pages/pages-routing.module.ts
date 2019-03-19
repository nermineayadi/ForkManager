import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CuisinierComponent } from './cuisinier/cuisinier.component';
import { ReprestComponent } from './represt/represt.component';
import { BarmanComponent } from './barman/barman.component';
import { ControlgestionComponent } from './controlgestion/controlgestion.component';

const routes: Routes = [
    { path: 'cuisine', component: CuisinierComponent },
    { path: 'responsable', component: ReprestComponent },
    { path: 'controle', component: ControlgestionComponent },
    { path: 'bar', component: BarmanComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
