import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarServeurService } from './navbar-serveur.service';
import { NavBarServeurComponent } from './navbar-serveur.component';
import { NavBarRoutingModule } from 'src/app/navbar/navbar-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatangModule } from 'src/assets/matang.module';

@NgModule({
    declarations: [NavBarServeurComponent],
    imports: [ CommonModule,
        NavBarRoutingModule,
    //flex
    FlexLayoutModule,
    MatangModule ],
    exports: [NavBarServeurComponent],
    providers: [NavbarServeurService],
})
export class NavbarServeurModule {}