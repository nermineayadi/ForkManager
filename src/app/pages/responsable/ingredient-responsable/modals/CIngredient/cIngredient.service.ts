import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class CIngredientService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        ) {}



ajoutIngredient(ingredient : any) {
  const itemsRef = this.db.list(`ingredients`);
  return itemsRef.push(ingredient);
}

}