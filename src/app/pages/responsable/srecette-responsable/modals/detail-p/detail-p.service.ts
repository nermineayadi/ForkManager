import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class DetailPService {
    constructor(private db: AngularFireDatabase )
    {}  

   getDetail(key : string){
       const itemref = this.db.object(`plats/${key}`);
       return itemref ;
   }
}