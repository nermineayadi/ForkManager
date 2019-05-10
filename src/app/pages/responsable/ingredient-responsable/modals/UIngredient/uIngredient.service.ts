import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UIngredientService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}

getIngredient(key : string){
  const itemref = this.db.object(`ingredients/${key}`);
  return itemref ;

}
updateIngredient(ingredient : any , key : string){
  const itemRef = this.db.object(`ingredients/${key}`);
  return itemRef.update(ingredient);

}
ajoutIngredient(ingredient : any) {
  const itemsRef = this.db.list(`ingredients`);
  return itemsRef.push(ingredient);
}

}