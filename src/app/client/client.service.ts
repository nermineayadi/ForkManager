import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';

@Injectable()
export class ClientService  {
    constructor(private db: AngularFireDatabase ,private snackBar : MatSnackBar,) {

    }
    addCmdGolf(cmd:any){
        const itemsRef = this.db.list('commandeGolf');
        return itemsRef.push(cmd);
    }
   
}