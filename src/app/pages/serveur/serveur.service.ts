import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable()
export class ServeurService{
    constructor(private db: AngularFireDatabase) {

    }

}