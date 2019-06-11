import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
export interface Transaction {
    key : string ;
    nom: string;
    prix: number;
    qte : number ; 
  }
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
displayedColumns: string[] = ['nom', 'qte', 'prix'];
transactions: Transaction[]= [];
action : string ='';

getTotalprix() {
  return this.transactions.map(t => t.prix).reduce((acc, value) => acc + value, 0);
}
page: number = 3;
  opened = false;
  onSerch = false;
  selectedItem: string ='' ;

addPlat(plat : any){
const index= this.transactions.findIndex((item:any)=>{
  return item.key == plat.key ; 
})
if ( index == -1){
  const obj = {
    key : plat.key ,
    nom : plat.payload.val().nomPlat, 
    prix : plat.payload.val().prix , 
    qte : 1 ,
  }
  this.transactions.push(obj)
} 
else {
  this.transactions[index].qte +=1;
  this.transactions[index].prix = this.transactions[index].prix+ plat.payload.val().prix;
}
this.transactions = [...this.transactions]

}
annuler(){
this.transactions = [];
}
passer(){

}
addBoisson(boisson : any){
const index= this.transactions.findIndex((item:any)=>{
  return item.key == boisson.key ; 
})
if ( index == -1){
  const obj = {
    key : boisson.key ,
    nom : boisson.payload.val().libelle, 
    prix : boisson.payload.val().prix , 
    qte : 1 ,
  }
  this.transactions.push(obj)
} 
else {
  this.transactions[index].qte +=1;
  this.transactions[index].prix = this.transactions[index].prix+ boisson.payload.val().prix;
}
this.transactions = [...this.transactions]

}

    ngOnInit(): void {
        this.route.data.subscribe((data)=>{
            console.log(data.client.boissons[0].payload.val())
            this.plats = data.client.plats; 
            this.boissons = data.client.boissons ; 
          })
     }
}
