import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class AcceuilServeurService {
    constructor(private db: AngularFireDatabase ,private snackBar : MatSnackBar,) {

    }
    addCmdInterne(cmd:any){
        const itemsRef = this.db.list('commandeInterne');
        return itemsRef.push(cmd);
    }
}