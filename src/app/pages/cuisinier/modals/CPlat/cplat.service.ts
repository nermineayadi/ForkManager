import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class CPlatService {
    constructor(
      private db: AngularFireDatabase ,
        private snackBar : MatSnackBar,
        public afAuth: AngularFireAuth ,
        ) {}



//snackbar
showMsg(message: string){
  this.snackBar.open(message ,'close',{
      duration : 2000
  })
}
ajoutPlat(plat : any) {
  const itemsRef = this.db.list(`plats`);
  return itemsRef.push(plat);
}

}