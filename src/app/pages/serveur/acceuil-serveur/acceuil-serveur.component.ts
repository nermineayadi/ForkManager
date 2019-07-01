import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/client/client.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { ServeurService } from '../serveur.service';
import { AcceuilServeurService } from './acceuil-serveur.service';

@Component({
    selector: 'app-acceuil-serveur',
    templateUrl: './acceuil-serveur.component.html',
    styleUrls: ['./acceuil-serveur.component.scss']
})
export class AcceuilServeurComponent implements OnInit {
    //localisation 

  plats : any[];
  platsV : any[]=[];
  boissonsV : any[]=[];

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

// addPlat(plat : any){
//   const index= this.transactions.findIndex((item:any)=>{
//     return item.key == plat.key ; 
//   })
//   if ( index == -1){
//     const obj = {
//       key : plat.key ,
//       nom : plat.payload.val().nomPlat, 
//       prix : plat.payload.val().prix , 
//       qte : 1 ,
//     }
//     this.transactions.push(obj)
//   } 
//   else {
//     this.transactions[index].qte +=1;
//     this.transactions[index].prix = this.transactions[index].prix+Number( plat.payload.val().prix);
//   }
//   this.transactions = [...this.transactions]

// }
// annuler(){
//   this.transactions = [];
// }
// passer(){
  
// }
//   addBoisson(boisson : any){
//   const index= this.transactions.findIndex((item:any)=>{
//     return item.key == boisson.key ; 
//   })
//   if ( index == -1){
//     const obj = {
//       key : boisson.key ,
//       nom : boisson.payload.val().libelle, 
//       prix :Number( boisson.payload.val().prix) , 
//       qte : 1 ,
//     }
//     this.transactions.push(obj)
//   } 
//   else {
//     this.transactions[index].qte +=1;
//     this.transactions[index].prix = this.transactions[index].prix+ Number(boisson.payload.val().prix);
//   }
//   this.transactions = [...this.transactions]

// }

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
      private AcceuilServeurService : AcceuilServeurService,
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
    addPlat(plat: any) {
      const index = this.transactions.findIndex((item: any) => {
        return item.key == plat.key;
      })
      if (index == -1) {
        const obj = {
          key: plat.key,
          nom: plat.payload.val().nomPlat,
          prix: Number(plat.payload.val().prix),
          qte: 1,
        }
        this.transactions.push(obj)
        this.platsV.push(plat.key)
  
      }
      else {
        this.transactions[index].qte += 1;
        this.transactions[index].prix = this.transactions[index].prix + Number(plat.payload.val().prix);
      }
      this.transactions = [...this.transactions]
  
    }
    annuler() {
      this.transactions = [];
    }
   
    passer() {
      let Plats: any[] = [];
      let Boissons: any[] = [];
      let index
      if (this.boissonsV.length > 0) {
        this.boissonsV.forEach(element => {
          index = this.transactions.findIndex((item: any) => {
            return item.key == element;
          })
          Boissons.push({ boisson: element, qte: this.transactions[index].qte })
        })
      }
      if (this.platsV.length > 0) {
        this.platsV.forEach(element => {
  
          index = this.transactions.findIndex((item: any) => {
  
            return item.key == element;
          })
          Plats.push({ plat: element, qte: this.transactions[index].qte })
        })
      }
        let obj
        if (Boissons.length > 0 && Plats.length == 0) {
          obj = {
            boissons: Boissons,
            date: new Date().toLocaleString(),
            
          }
        }
        else {
          if (Plats.length > 0 && Boissons.length == 0) {
            obj = {
              plats: Plats,
              date: new Date().toLocaleString(),
              
            }
          }
  
          else {
            obj = {
              boissons: Boissons,
              plats: Plats,
              date: new Date().toLocaleString(),
             
            }
          }
        }
        console.log(obj)
         this.AcceuilServeurService.addCmdInterne(obj).then((data)=>{
          this.shareService.showMsg('Commande Envoyée avec Succès')
      
       
         })
     
      this.transactions = [];
      this.boissonsV=[];
      this.platsV=[];
    }



    addBoisson(boisson: any) {
      const index = this.transactions.findIndex((item: any) => {
        return item.key == boisson.key;
      })
      if (index == -1) {
        const obj = {
          key: boisson.key,
          nom: boisson.payload.val().libelle,
          prix: Number(boisson.payload.val().prix),
          qte: 1,
        }
        this.transactions.push(obj)
        this.boissonsV.push(boisson.key)
  
      }
      else {
        this.transactions[index].qte += 1;
        this.transactions[index].prix = this.transactions[index].prix + Number(boisson.payload.val().prix);
      }
      this.transactions = [...this.transactions]
  
    }
  
   
}
