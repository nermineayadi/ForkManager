import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { ServeurService } from './serveur.service';
export interface Transaction {
  key : string ;
  nom: string;
  prix: number;
  qte : number ; 
}

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss']
})
export class ServeurComponent implements OnInit {
//localisation 
lat: number = 51.678418;
  lng: number = 7.809007;
  plats : any[];
  displayedColumns: string[] = ['nom', 'qte', 'prix'];
  transactions: Transaction[]= [];
  boissons: any[];
  action : string ='';
  ngOnInit() {
    this.route.data.subscribe((data)=>{
      this.plats = data.serveur.plats; 
      this.boissons = data.serveur.boissons ; 
      this.action = "Entree" ;
      console.log(data)
    })
   }
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

    setSelectedPage(m: number): void{
        this.page = m;
    }

    toggleNotification(): void{
        this.opened = !this.opened;
    }

    toggleSearch(): void{
        this.onSerch = !this.onSerch;
    }
    constructor(private router: Router,
      public shareService : ShareService , 
      private serveurservice : ServeurService,
      private route: ActivatedRoute) { }

  
    onchange(topic : string ){
      this.selectedItem= topic ;
      this.router.navigate(['/pages'+topic]);
  }
    activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;
    }
    setAction ( newaction : string){
      this.action = newaction ; 
      console.log(this.action)
    }
}
