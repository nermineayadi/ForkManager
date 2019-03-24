import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavBarRoutingModule } from './navbar-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [NavbarComponent],
    imports: [ CommonModule,NavBarRoutingModule ,
         //flex
        FlexLayoutModule],
    exports: [NavbarComponent],
    providers: [],
})
export class NavBarModule {}