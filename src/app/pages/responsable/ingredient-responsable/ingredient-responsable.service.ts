import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class IngredientResponsableService {
    constructor(private db: AngularFireDatabase) {

    }   
supprimeIngredient(key : string) {
        const itemsRef = this.db.object(`ingredients/${key}`);
        return itemsRef.remove();
      }
    

}