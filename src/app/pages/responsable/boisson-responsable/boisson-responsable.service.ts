import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class BoissonResponsableService {
    constructor(private db: AngularFireDatabase ,private snackBar : MatSnackBar,) {

    }
    
//snackbar
showMsg(message: string){
    this.snackBar.open(message ,'fermer',{
        duration : 2000
    })
  }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            const ref = this.getboissons().subscribe((boissons: any[])=>{
                const ref1 = this.getCategories().subscribe((categories)=>{
                    const ref2 = this.getclasses().subscribe((classes)=>{
                        const ref3 =   this.getFamilles().subscribe((familles)=>{
                            const ref4 =    this.getSfamilles().subscribe((sfamilles)=>{
                                const obj= {
                                    boissons: boissons,
                                   classes : classes ,
                                   categories :categories,
                                    familles : familles, 
                                    sfamilles : sfamilles
                                };
                                ref.unsubscribe();
                                ref1.unsubscribe();
                                ref2.unsubscribe();
                                ref3.unsubscribe();
                                ref4.unsubscribe();
                                resolve(obj)
                            })
                        })
                    })
                })
            });
        }
)
}
// supprimePlat(key : string) {
//     const itemsRef = this.db.object(`plats/${key}`);
//     return itemsRef.remove();
//   }

getboissons() {
    return this.db.list(`boissons`).snapshotChanges();
}
getCategories(){
    const ref = this.db.list('categories').snapshotChanges();
    return ref ;
}
getCategorie(key : string){
    var cat = firebase.database().ref("categories");
    cat.orderByChild("key").equalTo(key).on("child_added", function(snapshot) {
        console.log(snapshot.key);
      });
    //const ref = this.db.list('categories').orderByChild('size').equalTo(key).snapshotChanges();
    return cat ;
}
// getIngredients(){
//     const ref = this.db.list('ingredients').snapshotChanges();
//     return ref ;
// }
getFamilles(){
    const ref = this.db.list('familles').snapshotChanges();
    return ref ;
}
getSfamilles(){
    const ref = this.db.list('sfamille').snapshotChanges();
    return ref ;
}
getunites() {
    return this.db.list(`unites`).snapshotChanges();
}
getclasses() {
    return this.db.list(`classes`).snapshotChanges();
}

}