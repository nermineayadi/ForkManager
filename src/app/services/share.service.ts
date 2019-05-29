import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import * as firebase from 'firebase';
import { User } from '../models/user.model';
import { take } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class ShareService {
  notifications: any[] = [];
  uid = localStorage.getItem('uid');
  profile: any;
  constructor(private db: AngularFireDatabase,
    private snackBar: MatSnackBar,
    public afAuth: AngularFireAuth,
    private http: HttpClient,
    private storage: AngularFireStorage) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      const users = this.getUsers().subscribe((users) => {
        const plats = this.getPlats().subscribe((plats: any[]) => {
          const categories = this.getCategories().subscribe((categories) => {
            const classes = this.getClasses().subscribe((classes) => {
              const ingredients = this.getIngredients().subscribe((ingredients) => {
                const boissons = this.getBoissons().subscribe((boissons) => {
                  const familles = this.getFamilles().subscribe((familles) => {
                    const sfamilles = this.getSfamilles().subscribe((sfamilles) => {
                      const stockages = this.getStockages().subscribe((stockages) => {
                        const achats = this.getAchats().subscribe((achats) => {
                          const unites = this.getUnites().subscribe((unites) => {
                            const srecettes = this.getSrecettes().subscribe((srecettes) => {
                              const inventairesCuisine = this.getInventairesCuisine().subscribe((inventairesCuisine) => {
                                const inventairesBar = this.getInventairesBar().subscribe((inventairesBar) => {
                                  const commandesBarEconomat = this.getcommandesBarEconomat().subscribe((commandesBarEconomat) => {


                                  const obj = {
                                    users: users,
                                    plats: plats,
                                    categories: categories,
                                    classes: classes,
                                    ingredients: ingredients,
                                    boissons: boissons,
                                    familles: familles,
                                    sfamilles: sfamilles,
                                    stockages: stockages,
                                    achats: achats,
                                    unites: unites,
                                    srecettes: srecettes,
                                    inventairesCuisine: inventairesCuisine,
                                    inventairesBar: inventairesBar,
                                    commandesBarEconomat: commandesBarEconomat

                                  };
                                  resolve(obj)
                                })
                              })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      });
    }
    )
  }
  getPlats() {
    const ref = this.db.list('plats').snapshotChanges();
    return ref;
  }
  getCategories() {
    const ref = this.db.list('categories').snapshotChanges();
    return ref;
  }
  getFamilles() {
    const ref = this.db.list('familles').snapshotChanges();
    return ref;
  }
  getSfamilles() {
    const ref = this.db.list('sfamille').snapshotChanges();
    return ref;
  }
  getSrecettes() {
    const ref = this.db.list('srecettes').snapshotChanges();
    return ref;
  }
  getIngredients() {
    const ref = this.db.list('ingredients').snapshotChanges();
    return ref;
  }
  getBoissons() {
    const ref = this.db.list('boissons').snapshotChanges();
    return ref;
  }
  getUsers() {
    const ref = this.db.list('users').snapshotChanges();
    return ref;
  }
  getStockages() {
    const ref = this.db.list('stockages').snapshotChanges();
    return ref;
  }
  getAchats() {
    const ref = this.db.list('achats').snapshotChanges();
    return ref;
  }
  getClasses() {
    const ref = this.db.list('classes').snapshotChanges();
    return ref;
  }
  getUnites() {
    const ref = this.db.list('unites').snapshotChanges();
    return ref;
  }
  getInventairesCuisine() {
    const ref = this.db.list('inventairesCuisine').snapshotChanges();
    return ref;
  }
  getInventairesBar() {
    const ref = this.db.list('inventairesBar').snapshotChanges();
    return ref;
  }
  getIngredient(key: string) {
    return this.db.object(`ingredients/${key}`)

  }
  getcommandesBarEconomat(){
    const ref = this.db.list('CommandeBarEconomat').snapshotChanges();
    return ref;
  }
  getProfileToken(token: string) {
  }
  updateIngredient(key: string, used: number) {
    const ref = this.db.object(`ingredients/${key}`);
    console.log(used)
    return ref.update({
      used: used
    })
  }

  //authentification
  authentification(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  //notifications
  updateToken(token: string) {
    const ref = this.db.object(`users/${this.uid}`);
    return ref.update({
      token: token
    })
  }
  sendNotification(msg: any) {
    const header = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'key=AAAAghKcbmY:APA91bFHKMxwQtEepAvCkvpPKqQ3jSlyppjECHuIiF0CUBjHToljfwTxSDjdZArgkM-i7WRi3YRP_X0zNwyAOazK9iVE3h9cWBi6CWKoHzaohr8003qGZGLYygHcsWpmCoWrIpMwR9pF')
    const body = {
      notification: {
        title: msg.title,
        body: msg.body,
        icon: msg.icon
      },
      to: msg.to
    }
    console.log(body);
    return this.http.post('https://fcm.googleapis.com/fcm/send', body, { headers: header });

  }

  //create
  createUsers(obj: User, uid: string) {
    const itemsRef = this.db.object(`users/${uid}`);
    // return itemsRef.push({obj});   / OBJET JSON 
    //push : uid auto generated
    return itemsRef.set(obj);
  }
  //valider
  Valid(quantite: string, unite: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(quantite, unite);
  }

  //login
  logIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  // updateProfile
  updateProfile(user: User) {
    const itemRef = this.db.object(`users/${this.uid}`);
    return itemRef.update(user);
  }
  //get profile
  getProfile(uid: string) {
    const itemRef = this.db.object(`users/${uid}`);
    console.log(itemRef.valueChanges())
    return itemRef.valueChanges();
  }
  getUser(uid: string) {
    const itemRef = this.db.object(`users/${uid}`);
    console.log(itemRef.snapshotChanges())
    return itemRef.snapshotChanges();
  }
  //snackbar
  showMsg(message: string) {
    this.snackBar.open(message, 'close', {
      duration: 2000
    })
  }

  //cropper 
  avatar$: BehaviorSubject<string> = new BehaviorSubject<string>("./assets/img/avatar/avatar.png");
  setAvatar(croppedFile: string) {
    this.avatar$.next(croppedFile);
  }
  getAvatar() {
    return this.avatar$.asObservable();
  }
  uploadUserAvatar(file: File, uid: string) {
    const filePath = 'avatar/' + uid + '.png';
    const fileref = this.storage.ref(filePath);
    this.storage.upload(filePath, file).then(() => {
      fileref.getDownloadURL().subscribe((url: string) => {
        this.updateAvatar(uid, url).then(() => {
          this.showMsg('image sauvgarder')
          const profile = JSON.parse(localStorage.getItem('profile'))
          profile.avatar = url;
          localStorage.setItem('profile', JSON.stringify(profile));
        })
      })
    });
  }
  updateAvatar(uid: string, url: string) {
    const itemref = this.db.object('users/' + uid);
    return itemref.update({
      avatar: url
    });
  }


}
