import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable()
export class CmdBarService {
    constructor(private db: AngularFireDatabase,
        private snackBar: MatSnackBar,
        public afAuth: AngularFireAuth,
        ) { }
    ajoutCmd(commande : any){
        return  this.db.list(`CommandeBarEconomat`).push(commande);
        
    }
    SendCmd(commande : any,key : string){
        const ref = this.db.object(`CommandeBarEconomat/${key}`);
        return ref.update(commande
        )
    }
   
}