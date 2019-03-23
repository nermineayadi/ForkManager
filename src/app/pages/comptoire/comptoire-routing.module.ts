import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ComptoireComponent } from './comptoire.component';

const routes: Routes = [
    { path: '', component: ComptoireComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComptoireRoutingModule {}
