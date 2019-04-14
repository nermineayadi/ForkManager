import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestbaseComponent } from './testbase/testbase.component';
import { InterfaceTestComponent } from './InterfaceTest.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
    {
      path: "",
      component: InterfaceTestComponent,
      children: [
      { path: "test", component: TestbaseComponent },
      
      ]
    }
  ];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class InterfaceTestRoutingModule {}
