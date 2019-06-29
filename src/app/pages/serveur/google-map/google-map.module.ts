import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map.component';
import { GoogleMapRoutingModule } from './google-map-routing.module';

@NgModule({
    declarations: [GoogleMapComponent],
    imports: [ CommonModule ,
      GoogleMapRoutingModule,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcB2n8SVTSqkO-Be6XXXNSvvqB8UVfPH4'
    }), 
       ],
    exports: [GoogleMapComponent],
    providers: [],
})
export class GoogleMapModule {}