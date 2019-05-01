import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({providedIn : 'root'})
export class ShareService {
  uid = localStorage.getItem('uid');
  profile : any ;
  constructor(private db: AngularFireDatabase ,
    private snackBar : MatSnackBar,
    public afAuth: AngularFireAuth ,
    private http: HttpClient,
    private storage: AngularFireStorage) {}
   //authentification
   authentification(email : string , password : string){
    return this.afAuth.auth.createUserWithEmailAndPassword(email,password);
}
updateToken(token : string){
  const ref = this.db.object(`users/${this.uid}`);
return ref.update({
  token : token
})
}
sendNotification(msg : any){
  const header = new HttpHeaders()
  .set('Content-Type' ,'application/json')
  .set('Authorization','key=AAAAghKcbmY:APA91bFHKMxwQtEepAvCkvpPKqQ3jSlyppjECHuIiF0CUBjHToljfwTxSDjdZArgkM-i7WRi3YRP_X0zNwyAOazK9iVE3h9cWBi6CWKoHzaohr8003qGZGLYygHcsWpmCoWrIpMwR9pF')
  const body = {
    notification : {
      title : msg.title ,
      body : msg.body
    },
    to : msg.to
  }
  console.log(body);
  return this.http.post('https://fcm.googleapis.com/fcm/send',body,{headers : header});

}
//cropper 
    avatar$ : BehaviorSubject<string>= new BehaviorSubject<string>("./assets/img/avatar/avatar.png"); 
    setAvatar(croppedFile: string){
        this.avatar$.next(croppedFile);
    }
    getAvatar(){
        return this.avatar$.asObservable(); 
    }
  //create
  createUsers(obj: User , uid : string) {
    const itemsRef = this.db.object(`users/${uid}`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.set(obj);
  }
 //valider
 Valid(quantite : string ,unite : string){
  return this.afAuth.auth.signInWithEmailAndPassword(quantite ,unite);
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
//get profile
getProfile(uid : string){
  const itemRef = this.db.object(`users/${uid}`);
 return itemRef.valueChanges();
}
//snackbar
  showMsg(message: string){
      this.snackBar.open(message ,'close',{
          duration : 2000
      })
  }

  createingredient() {
    const itemsRef = this.db.list(`ingredient`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.push({name:"fraise",categorie:"fruit"});
  }
  // createcategorie() {
  //   const itemsRef = this.db.list(`categories`);
  //   // return itemsRef.push({obj});   / OBJET JSON 
  //   //push : uid auto generated
  //   return itemsRef.push({name:"suite"});
  // }
  createcategorie() {
    const itemsRef = this.db.list(`sfamille`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.push({name:"spaguetti"});
  }
  createfamille() {
    const itemsRef = this.db.list(`famille/`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.push({name:"pizza" , categorie:"-LcBOZV-II9iUpSc6VRf"});
  }
  createsfamille() {
    const itemsRef = this.db.list(`sfamille`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.push({name:"spaguetti" , famille:"-LcBsv3jdhBBhC4NIljL"});
  }
  createcategories() {
    const itemsRef = this.db.list(`ingredient`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.push({name:"spaguetti"});
}
uploadUserAvatar(file : File , uid : string){
  const filePath = 'avatar/'+uid+'.png';
  const fileref = this.storage.ref(filePath);
   this.storage.upload(filePath, file).then(()=>{
  fileref.getDownloadURL().subscribe((url : string)=>{
  this.updateAvatar(uid,url).then(()=>{
    this.showMsg('image sauvgarder')
    const profile = JSON.parse(localStorage.getItem('profile'))
    profile.avatar = url ; 
    localStorage.setItem('profile',JSON.stringify(profile));
  })
  })
});
}
updateAvatar(uid: string, url : string ){
const itemref = this.db.object('users/'+uid); 
 return itemref.update({
  avatar : url
});
}


}
