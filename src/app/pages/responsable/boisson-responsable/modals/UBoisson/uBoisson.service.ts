import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UBoissonService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}

getBoisson(key : string){
  const itemref = this.db.object(`boissons/${key}`);
  console.log(itemref);
  return itemref ;

}
updateBoisson(boisson : any , key : string){
  const itemRef = this.db.object(`boissons/${key}`);
  console.log(itemRef);

  return itemRef.update(boisson);

}
ajoutPlat(boisson : any) {
  const itemsRef = this.db.list(`boissons`);
  return itemsRef.push(boisson);
}

}