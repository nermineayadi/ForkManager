import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user.model';
@Injectable({providedIn : 'root'})
export class ShareService {
    uid = localStorage.getItem('uid');
  constructor(private db: AngularFireDatabase ,
    private snackBar : MatSnackBar,
    public afAuth: AngularFireAuth ) {}
   //register
   register(email : string , password : string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
}

  //create
  createUsers(obj: User , uid : string) {
    const itemsRef = this.db.object(`users/${uid}`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.set(obj);
  }


  //login
  logIn(email : string , password : string){
      return this.afAuth.auth.signInWithEmailAndPassword(email,password);
  }

// updateProfile
updateProfile(user : User){
    const itemRef = this.db.object(`users/${this.uid}`);
   return itemRef.update(user);
}
//snackbar
  showMsg(message: string){
      this.snackBar.open(message ,'close',{
          duration : 2500
      })
  }
}