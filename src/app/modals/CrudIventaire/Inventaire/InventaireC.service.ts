import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class InventaireCService {
    constructor(private db: AngularFireDatabase ,
        
        ) {}
        ajoutInventaire(Inventaire : any) {
            
            const itemsRef = this.db.list(`inventaires`);
            return itemsRef.push(Inventaire);
          }
          ModifInventaire(key : any ,Inventaire : any) {
            console.log(key)
            const itemsRef = this.db.list(`inventaires`);
            return itemsRef.update(key,Inventaire);
          }
    
}