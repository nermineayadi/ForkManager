import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map.component';

const routes: Routes = [
    { path: '', component: GoogleMapComponent }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GoogleMapRoutingModule {}
