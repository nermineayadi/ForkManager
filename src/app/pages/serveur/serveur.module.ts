import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServeurRoutingModule } from './serveur-routing.module';
import { ServeurComponent } from './serveur.component';
import { MatangModule } from 'src/assets/matang.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServeurService } from './serveur.service';
import { NavBarModule } from 'src/app/navbar/navbar.module';
import { PipesModule } from 'src/app/pipes/pipes.module';
import { GoogleMapModule } from './google-map/google-map.module';
import { AgmCoreModule } from '@agm/core';
import { NavbarServeurModule } from './navbar-serveur/navbar-serveur.module';

@NgModule({
    declarations: [ServeurComponent     
   
    ],
    imports: [ CommonModule ,ServeurRoutingModule,  CommonModule,PipesModule,
        //flex
        FlexLayoutModule,
        MatangModule,
        NavBarModule,
        GoogleMapModule,
        NavbarServeurModule,
        AgmCoreModule.forRoot({
          apiKey: 'AIzaSyDcB2n8SVTSqkO-Be6XXXNSvvqB8UVfPH4'
        }), 

      ],
    exports: [],
    providers: [ServeurService],
})
export class ServeurModule { }