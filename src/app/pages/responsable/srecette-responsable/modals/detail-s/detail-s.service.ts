import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class DetailSService {
    constructor(private db: AngularFireDatabase )
    {}  

   getDetail(key : string){
       const itemref = this.db.object(`srecettes/${key}`);
       return itemref ;
   }
}