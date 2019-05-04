import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class BoissonResponsableService {
    constructor(private db: AngularFireDatabase) {

    }   
supprimeBoisson(key : string) {
        const itemsRef = this.db.object(`boissons/${key}`);
        return itemsRef.remove();
      }
    

}