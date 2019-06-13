import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
    declarations: [GoogleMapComponent],
    imports: [ CommonModule ,
      AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDcB2n8SVTSqkO-Be6XXXNSvvqB8UVfPH4'
    }), 
       ],
    exports: [GoogleMapComponent],
    providers: [],
})
export class GoogleMapModule {}