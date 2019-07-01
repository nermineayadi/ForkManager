import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcceuilServeurComponent } from './acceuil-serveur.component';
import { AcceuilServeurService } from './acceuil-serveur.service';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarServeurModule } from '../navbar-serveur/navbar-serveur.module';
import { MatangModule } from 'src/assets/matang.module';

@NgModule({
    declarations: [AcceuilServeurComponent],
    imports: [ CommonModule
        ,PipesModule,
        //flex
        FlexLayoutModule,
        MatangModule,
  NavbarServeurModule],
    exports: [],
    providers: [AcceuilServeurService],
})
export class AcceuilServeurModule {}