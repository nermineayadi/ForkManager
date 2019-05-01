import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class cboissonService {
    constructor(private db: AngularFireDatabase ,
        private snackBar : MatSnackBar,
        public afAuth: AngularFireAuth ,
        ) {}



//snackbar
showMsg(message: string){
  this.snackBar.open(message ,'close',{
      duration : 2000
  })
}
addboisson(boisson: any) {
    const itemsRef = this.db.list(`boissons`);
    console.log(boisson)
    return itemsRef.push(boisson);
}
addclasse(classes: any) {
    const itemsRef = this.db.list(`classes`);
    return itemsRef.push(classes);
}

    createcategorie() {
        const itemsRef = this.db.list(`sfamille`);
        // return itemsRef.push({obj});   / OBJET JSON 
        //push : uid auto generated
        return itemsRef.push({name:"spaguetti"});
      }
      createfamille() {
        const itemsRef = this.db.list(`famille/`);
        // return itemsRef.push({obj});   / OBJET JSON 
        //push : uid auto generated
        return itemsRef.push({name:"pizza" , categorie:"-LcBOZV-II9iUpSc6VRf"});
      }
      createsfamille() {
        const itemsRef = this.db.list(`sfamille`);
        // return itemsRef.push({obj});   / OBJET JSON 
        //push : uid auto generated
        return itemsRef.push({name:"spaguetti" , famille:"-LcBsv3jdhBBhC4NIljL"});
      }
      createcategories() {
        const itemsRef = this.db.list(`ingredient`);
        // return itemsRef.push({obj});   / OBJET JSON 
        //push : uid auto generated
        return itemsRef.push({name:"spaguetti"});
    }
}