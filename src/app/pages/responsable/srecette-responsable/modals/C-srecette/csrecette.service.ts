import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class CSrecetteService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        ) {}



ajoutSrecette(srecette : any) {
  const itemsRef = this.db.list(`srecettes`);
  return itemsRef.push(srecette);
}

}