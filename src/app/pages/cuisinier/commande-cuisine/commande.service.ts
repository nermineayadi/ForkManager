import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { ShareService } from 'src/app/services/share.service';
import { AngularFireDatabase } from "@angular/fire/database";

ShareService
@Injectable()
export class CommandeCuisineService  {
    constructor(private db: AngularFireDatabase,
      
        ) { }
    ajoutCmd(commande : any){
        return  this.db.list(`CommandeCuisineEconomat`).push(commande);
        
    }
    SendCmd(commande : any,key : string){
        const ref = this.db.object(`CommandeCuisineEconomat/${key}`);
        return ref.update(commande
        )
    }



}




