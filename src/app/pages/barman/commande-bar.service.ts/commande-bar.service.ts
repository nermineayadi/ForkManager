import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class CmdBarService {
    constructor(private db: AngularFireDatabase,

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