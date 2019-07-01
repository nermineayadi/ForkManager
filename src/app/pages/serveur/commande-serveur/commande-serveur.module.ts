import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarServeurModule } from '../navbar-serveur/navbar-serveur.module';
import { MatangModule } from 'src/assets/matang.module';
import { CmdServeurService } from './commande-serveur.service';
import { CmdServeurComponent } from './commande-serveur.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    declarations: [CmdServeurComponent],
    imports: [ CommonModule
        ,PipesModule,
        FlexLayoutModule,
        MatangModule,
  NavbarServeurModule,
  AgmCoreModule.forRoot({
    apiKey: 'AIzaSyDcB2n8SVTSqkO-Be6XXXNSvvqB8UVfPH4'
  }),  ],
    exports: [],
    providers: [CmdServeurService],
})
export class CmdServeurModule {}