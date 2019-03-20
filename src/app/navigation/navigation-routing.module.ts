import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RecetteComponent } from '../pages/cuisinier/recette/recette.component';

const routes: Routes = [
    { path: 'plats', component: RecetteComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FeatureRoutingModule {}
