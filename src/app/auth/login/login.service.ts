import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  uid = localStorage.getItem('uid');
  constructor(private db: AngularFireDatabase ,
    private snackBar : MatSnackBar,
    public afAuth: AngularFireAuth ,
    private http: HttpClient) {}

    showMsg(message: string){
        this.snackBar.open(message ,'close',{
            duration : 2000
        })}

    //login
  logIn(email : string , password : string){
    return this.afAuth.auth.signInWithEmailAndPassword(email,password);
}


}