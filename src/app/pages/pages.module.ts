import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages-routing.module";
//flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages.component';
import { MatangModule } from 'src/assets/matang.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule, RouterModule,
     PagesRoutingModule,
     MatangModule,
     //flex
     FlexLayoutModule
    ],
  exports: [],
  providers: []
})
export class PagesModule {}
