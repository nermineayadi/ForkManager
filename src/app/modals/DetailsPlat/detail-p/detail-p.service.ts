import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class DetailPService {
    constructor(private db: AngularFireDatabase ,private snackBar : MatSnackBar,)
    {}  
    //snackbar
showMsg(message: string){
    this.snackBar.open(message ,'fermer',{
        duration : 2000
    })
  }
   getDetail(key : string){
       const itemref = this.db.object(`plats/${key}`);
       return itemref ;
   }
}