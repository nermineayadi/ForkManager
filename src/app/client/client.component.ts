import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html',
    styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

    plats : any[];
    boissons: any[];
    clientForm: FormGroup

  
    constructor( private route: ActivatedRoute, private formBuilder: FormBuilder) { 
        this.clientForm = this.formBuilder.group({
            id: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
            parcours :new FormControl('', Validators.required),
            trou :  new FormControl('', Validators.required),
            color : new FormControl('', Validators.required),
    })
}

    ngOnInit(): void {
        this.route.data.subscribe((data)=>{
            this.plats = data.client.plats; 
            this.boissons = data.client.boissons ; 
          })
     }
}
