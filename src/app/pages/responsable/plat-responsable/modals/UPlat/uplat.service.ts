import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UPlatService {
    constructor(private db: AngularFireDatabase ,
        private snackBar : MatSnackBar,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}
//snackbar
showMsg(message: string){
  this.snackBar.open(message ,'close',{
      duration : 2000
  })
}
getPlat(key : string){
  const itemref = this.db.object(`plats/${key}`);
  console.log(itemref);
  return itemref ;

}
updatePlat(plat : any , key : string){
  const itemRef = this.db.object(`plats/${key}`);
  console.log(itemRef);

  return itemRef.update(plat);

}
ajoutPlat(plat : any) {
  const itemsRef = this.db.list(`plats`);
  return itemsRef.push(plat);
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