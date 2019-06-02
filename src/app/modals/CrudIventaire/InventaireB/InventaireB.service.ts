import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class InventaireBService {
    constructor(private db: AngularFireDatabase ,
        
        ) {}
        ajoutInventaire(Inventaire : any) {
            
          return  this.db.list(`inventairesBar`).push(Inventaire);;
           
          }

          ModifInventaire(key : any ,Inventaire : any) {
            const itemsRef = this.db.list(`inventairesBar`);
            return itemsRef.update(key,Inventaire);
          }
    
}