import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class VerifIService {
    constructor(private db: AngularFireDatabase )
    {}  

   getDetail(key : string){
       const itemref = this.db.object(`Inventaire/${key}`);
       return itemref ;
   }
}