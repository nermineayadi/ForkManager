import { Component, OnInit } from '@angular/core';
  // just an interface for type safety.
  interface marker {
    lat: number;
    lng: number;
    label?: string;
    parcours:string;
    icon:string;
}
@Component({
    selector: 'app-google-map',
    templateUrl: './google-map.component.html',
    styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {
  
    lat: number = 35.896999;
    lng:number=10.587838;
    markers: marker[] = [
        {
            lat: 35.89633346896328,
            lng: 10.586808237333116,
            label: '1',
            parcours:'panorama',
            icon:'../../../../assets/img/red1.png'
            
        },

        {
            lat: 35.89451264025506,
            lng: 10.58572998930913,
            label: '2',
            parcours:'panorama',
            icon:'../../../../assets/img/red2.png'
            
        },   
        {
            lat: 35.89373910130322,
            lng: 10.585075530309496,
            label: '3',
            parcours:'panorama',
            icon:'../../../../assets/img/red3.png'
            
        },
        {
            lat: 35.89253532059844,
            lng: 10.584565910596666,
            label: '4',
            parcours:'panorama',
            icon:'../../../../assets/img/red4.png'
            
        },
        {
            lat: 35.89054056787446,
            lng: 10.583004864949999,
            label: '5',
            parcours:'panorama',
            icon:'../../../../assets/img/red5.png'
            
        },
        {
            lat: 35.897076563633874,
            lng: 10.584592732686815,
            label: '1',
            parcours:'sea',
            icon:'../../../../assets/img/yellow1.png'
            
        },

        {
            lat: 35.89800216302894,
            lng: 10.585531505842027,
            label: '2',
            parcours:'sea',
            icon:'../../../../assets/img/yellow2.png'
            
        },   
        {
            lat: 35.898502710703376,
            lng: 10.589334355054348,
            label: '3',
            parcours:'sea',
            icon:'../../../../assets/img/yellow3.png'
            
        },
        {
            lat: 35.89903285799808,
            lng: 10.591362105069607,
            label: '4',
            parcours:'sea',
            icon:'../../../../assets/img/yellow4.png'
            
        },
        {
            lat: 35.89935442102058,
            lng: 10.593582974133938,
            label: '5',
            parcours:'sea',
            icon:'../../../../assets/img/yellow5.png'
            
        }
    ]
  
  

    constructor() { }

    ngOnInit(): void {
     }

}
