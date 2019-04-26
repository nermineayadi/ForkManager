import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ProfileService {

    uid = localStorage.getItem('uid');
    constructor(private db: AngularFireDatabase ,
        private snackBar : MatSnackBar,
        public afAuth: AngularFireAuth ,
        private http: HttpClient) {}


        showMsg(message: string){
            this.snackBar.open(message ,'close',{
                duration : 2000
            })}

//cropper 
avatar$ : BehaviorSubject<string>= new BehaviorSubject<string>("./assets/img/avatar/av.jpg"); 
setAvatar(croppedFile: string){
    this.avatar$.next(croppedFile);
}
getAvatar(){
    return this.avatar$.asObservable(); 
}

// updateProfile
updateProfile(user : User){
    const itemRef = this.db.object(`users/${this.uid}`);
   return itemRef.update(user);
}
}
