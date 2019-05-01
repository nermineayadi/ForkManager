import { Injectable } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material';
@Injectable()
export class ServeurService implements Resolve<any> {
    constructor(private db: AngularFireDatabase ,private snackBar : MatSnackBar,) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            this.getPlats().subscribe((plats)=>{
    
                this.getBoisson().subscribe((boissons)=>{
                    resolve({
                        plats : plats, 
                        boissons: boissons
                    })
                })
            })

        });
    }

    getPlats(){
        const ref = this.db.list('plats').snapshotChanges();
        return ref;
    }
    getBoisson(){
        const ref = this.db.list('boissons').snapshotChanges();
        return ref;
    }
   
}