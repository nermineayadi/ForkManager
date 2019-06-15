import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
    declarations: [GoogleMapComponent],
    imports: [ CommonModule ,
      AgmCoreModule.forRoot({
      apiKey: ''
    }), 
       ],
    exports: [GoogleMapComponent],
    providers: [],
})
export class GoogleMapModule {}