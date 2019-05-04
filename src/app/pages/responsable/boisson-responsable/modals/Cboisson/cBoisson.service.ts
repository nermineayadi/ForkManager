import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class CBoissonService {
    constructor(private db: AngularFireDatabase ,
        public afAuth: AngularFireAuth ,
        ) {}



ajoutBoisson(boisson : any) {
  const itemsRef = this.db.list(`boissons`);
  return itemsRef.push(boisson);
}

}