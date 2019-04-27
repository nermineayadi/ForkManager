import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { InterfaceTestComponent } from './InterfaceTest.component';
import { TestService } from './InterfaceTest.service';

const routes: Routes = [

];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InterfaceTestRoutingModule {}
