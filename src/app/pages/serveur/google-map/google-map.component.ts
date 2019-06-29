import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
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
    markeurs:any[]=[]
    markers: marker[] = [
        {
            lat: 35.894051,
            lng: 10.589864,
            label: '0021017',
            parcours:'panorama',
            icon:'../../../../assets/img/red1.png'
            
        },

        {
            lat: 35.890272,
            lng: 10.590490,
            label: '2',
            parcours:'panorama',
            icon:'../../../../assets/img/red2.png'
            
        },   
        {
            lat: 35.890764,
            lng: 10.588771,
            label: '3',
            parcours:'panorama',
            icon:'../../../../assets/img/red3.png'
            
        },
        {
            lat: 35.894517,
            lng:  10.587261,
            label: '4',
            parcours:'panorama',
            icon:'../../../../assets/img/red4.png'
            
        },
        {
            lat: 35.891775,
            lng: 10.584210,
            label: '5',
            parcours:'panorama',
            icon:'../../../../assets/img/red5.png'
            
        },
        {
            lat: 35.891325,
            lng: 10.581722,
            label: '6',
            parcours:'panorama',
            icon:'../../../../assets/img/red6.png'
            
        },

        {
            lat: 35.892355,
            lng: 10.578655,
            label: '7',
            parcours:'panorama',
            icon:'../../../../assets/img/red7.png'
            
        },   
        {
            lat: 35.891443,
            lng: 10.576146,
            label: '8',
            parcours:'panorama',
            icon:'../../../../assets/img/red8.png'
            
        },
        {
            lat: 35.888664,
            lng: 10.576848,
            label: '9',
            parcours:'panorama',
            icon:'../../../../assets/img/red9.png'
            
        },
        {
            lat: 35.891027,
            lng: 10.576068,
            label: '10',
            parcours:'panorama',
            icon:'../../../../assets/img/red10.png'
            
        },
        {
            lat: 35.888348,
            lng:  10.578381,
            label: '11',
            parcours:'panorama',
            icon:'../../../../assets/img/red11.png'
            
        },

        {
            lat: 35.889827,
            lng: 10.580675,
            label: '12',
            parcours:'panorama',
            icon:'../../../../assets/img/red12.png'
            
        },   
        {
            lat: 35.890843,
            lng: 10.577829,
            label: '13',
            parcours:'panorama',
            icon:'../../../../assets/img/red13.png'
            
        },
        {
            lat: 35.890079,
            lng: 10.582548,
            label: '14',
            parcours:'panorama',
            icon:'../../../../assets/img/red14.png'
            
        },
        {
            lat: 35.888974,
            lng: 10.581734,
            label: '15',
            parcours:'panorama',
            icon:'../../../../assets/img/red15.png'
            
        },
        {
            lat: 35.888472,
            lng:  10.586436,
            label: '16',
            parcours:'panorama',
            icon:'../../../../assets/img/red16.png'
            
        },

        {
            lat: 35.890791,
            lng: 10.583344,
            label: '0021023',
            parcours:'panorama',
            icon:'../../../../assets/img/red17.png'
            
        },   
        {
            lat: 35.896065,
            lng: 10.586232,
            label: '18',
            parcours:'panorama',
            icon:'../../../../assets/img/red18.png'
            
        },
        {
            lat: 35.896508,
            lng: 10.579999,
            label: '0021040',
            parcours:'sea',
            icon:'../../../../assets/img/yellow1.png'
            
        },

        {
            lat: 35.898929,
            lng: 10.577815,
            label: '2',
            parcours:'sea',
            icon:'../../../../assets/img/yellow2.png'
            
        },   
        {
            lat: 35.899821,
            lng: 10.580932,
            label: '3',
            parcours:'sea',
            icon:'../../../../assets/img/yellow3.png'
            
        },
        {
            lat: 35.898894,
            lng: 10.580950,
            label: '4',
            parcours:'sea',
            icon:'../../../../assets/img/yellow4.png'
            
        },
        {
            lat: 35.900079,
            lng: 10.577695,
            label: '5',
            parcours:'sea',
            icon:'../../../../assets/img/yellow5.png'
            
        },
        {
            lat: 35.901853,
            lng: 10.575835,
            label: '6',
            parcours:'sea',
            icon:'../../../../assets/img/yellow6.png'
            
        },

        {
            lat: 35.903692,
            lng: 10.581101,
            label: '7',
            parcours:'sea',
            icon:'../../../../assets/img/yellow7.png'
            
        },   
        {
            lat: 35.901007,
            lng: 10.581639,
            label: '8',
            parcours:'sea',
            icon:'../../../../assets/img/yellow8.png'
            
        },
        {
            lat: 35.897607,
            lng: 10.584374,
            label: '9',
            parcours:'sea',
            icon:'../../../../assets/img/yellow9.png'
            
        },
        {
            lat: 35.899661,
            lng: 10.582665,
            label: '10',
            parcours:'sea',
            icon:'../../../../assets/img/yellow10.png'
            
        },
        {
            lat: 35.898223,
            lng: 10.586650,
            label: '11',
            parcours:'sea',
            icon:'../../../../assets/img/yellow11.png'
            
        },

        {
            lat: 35.899791,
            lng: 10.591690,
            label: '12',
            parcours:'sea',
            icon:'../../../../assets/img/yellow12.png'
            
        },   
        {
            lat: 35.901537,
            lng: 10.590724,
            label: '13',
            parcours:'sea',
            icon:'../../../../assets/img/yellow13.png'
            
        },
        {
            lat: 35.899797,
            lng: 10.593159,
            label: '14',
            parcours:'sea',
            icon:'../../../../assets/img/yellow14.png'
            
        },
        {
            lat: 35.897608,
            lng: 10.588675,
            label: '15',
            parcours:'sea',
            icon:'../../../../assets/img/yellow15.png'
            
        },
        {
            lat: 35.897595,
            lng: 10.585546,
            label: '16',
            parcours:'sea',
            icon:'../../../../assets/img/yellow16.png'
            
        },

        {
            lat: 35.896179,
            lng: 10.581984,
            label: '17',
            parcours:'sea',
            icon:'../../../../assets/img/yellow17.png'
            
        },   
        {
            lat:35.896372,
            lng:10.585955,
            label: '18',
            parcours:'sea',
            icon:'../../../../assets/img/yellow18.png'
            
        }
    ]
  
  

    constructor( private shareService : ShareService) {
        this.shareService.getTrous().subscribe((trous)=>{
            trous.forEach(element => {
                this.markeurs.push(element.payload.val())
                
            });
        })
     }

    ngOnInit(): void {
     }

}
