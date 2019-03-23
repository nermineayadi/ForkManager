import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ResponsableComponent } from './responsable.component';

const routes: Routes = [
    { path: '', component: ResponsableComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ResponsableRoutingModule {}
