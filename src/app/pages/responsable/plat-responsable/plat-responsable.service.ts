import { Injectable } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from 'firebase';

ShareService
@Injectable()
export class PlatResponsableService {
    constructor(private db: AngularFireDatabase) {

    }

supprimePlat(key : string) {
    const itemsRef = this.db.object(`plats/${key}`);
    return itemsRef.remove();
  }
  supprimeSrecette(key : string) {
    const itemsRef = this.db.object(`srecettes/${key}`);
    return itemsRef.remove();
  }



getCategorie(key : string){
    var cat = firebase.database().ref("categories");
    cat.orderByChild("key").equalTo(key).on("child_added", function(snapshot) {
        console.log(snapshot.key);
      });
    //const ref = this.db.list('categories').orderByChild('size').equalTo(key).snapshotChanges();
    return cat ;
}
}