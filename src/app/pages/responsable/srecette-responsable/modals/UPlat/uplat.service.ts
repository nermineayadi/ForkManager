import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UPlatService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}

getPlat(key : string){
  const itemref = this.db.object(`plats/${key}`);
  console.log(itemref);
  return itemref ;

}
updatePlat(plat : any , key : string){
  const itemRef = this.db.object(`plats/${key}`);
  console.log(itemRef);

  return itemRef.update(plat);

}
ajoutPlat(plat : any) {
  const itemsRef = this.db.list(`plats`);
  return itemsRef.push(plat);
}

}