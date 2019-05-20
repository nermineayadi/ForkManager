import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { PagesRoutingModule } from "./pages-routing.module";
import { DetailSComponent } from './responsable/srecette-responsable/modals/detail-s/detail-s.component';

//flex
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesComponent } from './pages.component';
import { MatangModule } from 'src/assets/matang.module';

@NgModule({
  declarations: [
    PagesComponent,
    DetailSComponent
  ],
  imports: [
    CommonModule, RouterModule,
     PagesRoutingModule,
     MatangModule,
     //flex
     FlexLayoutModule
    ],
    entryComponents:[DetailSComponent],
  exports: [],
  providers: []
})
export class PagesModule {}
