import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class InventaireCService {
    constructor(private db: AngularFireDatabase ,
        
        ) {}
        ajoutInventaire(Inventaire : any) {
            
          return  this.db.list(`inventairesCuisine`).push(Inventaire);;
           
          }

          ModifInventaire(key : any ,Inventaire : any) {
            const itemsRef = this.db.list(`inventairesCuisine`);
            return itemsRef.update(key,Inventaire);
          }
    
}