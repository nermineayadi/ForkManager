import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class USrecetteService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}

getSrecette(key : string){
  const itemref = this.db.object(`srecettes/${key}`);
  console.log(itemref);
  return itemref ;

}
updateSrecette(srecette : any , key : string){
  const itemRef = this.db.object(`srecettes/${key}`);
  console.log(itemRef);

  return itemRef.update(srecette);

}


}