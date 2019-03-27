import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar.component";
import { NavBarRoutingModule } from "./navbar-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatangModule } from "src/assets/matang.module";
@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    NavBarRoutingModule,
    //flex
    FlexLayoutModule,
    MatangModule
  ],
  exports: [NavbarComponent],
  providers: []
})
export class NavBarModule {}
