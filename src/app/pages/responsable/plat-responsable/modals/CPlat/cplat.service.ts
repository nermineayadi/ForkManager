import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class CPlatService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        ) {}



ajoutPlat(plat : any) {
  const itemsRef = this.db.list(`plats`);
  return itemsRef.push(plat);
}

}