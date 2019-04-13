import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { ShareService } from 'src/app/services/share.service';
import { AngularFireDatabase } from "@angular/fire/database";

ShareService
@Injectable()
export class CommandeService implements Resolve<any> {
    constructor(private db: AngularFireDatabase ,) {

    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            const ref1 = this.getCategories().subscribe((categories)=>{
                const ref2 = this.getIngredient().subscribe((ingredient)=>{
                   
                            const obj= {
                                categories: categories,
                                ingredient : ingredient,
                             
                            };
                            ref1.unsubscribe();
                            ref2.unsubscribe();
                           
                            resolve(obj)
                        })
                    })
                   
                })
            

        }
    getIngredient() {
        const ref = this.db.list('ingredient').snapshotChanges();
    return ref ;
    }
    getCategories() {
        const ref = this.db.list('categories').snapshotChanges();
        return ref ;
    }

}




