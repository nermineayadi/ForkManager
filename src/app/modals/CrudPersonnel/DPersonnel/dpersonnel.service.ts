import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class DPersonnelService {
    // Initialize the default app

    constructor(private db: AngularFireDatabase) {} 
    supprimePersonnel(key : string){
            const itemsRef = this.db.object(`users/${key}`);
            return itemsRef.remove();
          }
    }
