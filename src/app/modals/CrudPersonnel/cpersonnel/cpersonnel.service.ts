import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database/public_api';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user.model';

@Injectable()
export class CPersonnelService {
  constructor(private db: AngularFireDatabase,
    private snackBar: MatSnackBar,
    public afAuth: AngularFireAuth,
    private http: HttpClient) { }

//snackBar
  showMsg(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000
    })
  }
  //authentification
  authentification(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  //create 
     // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
  createUsers(obj: User, uid: string) {
    const itemsRef = this.db.object(`users/${uid}`);
    return itemsRef.set(obj);
  }
}
