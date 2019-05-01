import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    plats : any[];
    boissons: any[];
  
    constructor( private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.data.subscribe((data)=>{
            this.plats = data.client.plats; 
            this.boissons = data.client.boissons ; 
          })
     }
}
