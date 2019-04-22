import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {
    constructor(private db: AngularFireDatabase,
        private snackBar: MatSnackBar) { }
    
    //snackbar
    showMsg(message: string) {
        this.snackBar.open(message, 'close', {
            duration: 2000
        })
    }
    //resolve
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            const ref = this.getclasses().subscribe((classes)=>{
                const ref1 = this.getunites().subscribe((unites)=>{
                    const ref2 = this.getachats().subscribe((achats)=>{
                        const ref3 =   this.getstockages().subscribe((stockages)=>{
                            const ref4 =    this.getfamilles().subscribe((familles)=>{
                                const ref5 =    this.getsfamilles().subscribe((sfamilles)=>{
                                    const ref6 = this.getCategories().subscribe((categories)=>{

                                    

                                const obj= {
                                    categories:categories,
                                    classes:classes,
                                    unites:unites,
                                    achats:achats,
                                    stockages:stockages,
                                    familles:familles,
                                    sfamilles:sfamilles

                                };
                                ref.unsubscribe();
                                ref1.unsubscribe();
                                ref2.unsubscribe();
                                ref3.unsubscribe();
                                ref4.unsubscribe();
                                ref5.unsubscribe();
                                ref6.unsubscribe();

                                resolve(obj)
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
    //add
    addCategorie(categories: any) {
        const itemsRef = this.db.list(`categories`);
        return itemsRef.push(categories);
    }

    addfamille(familles: any) {
        const itemsRef = this.db.list(`familles`);
        return itemsRef.push(familles);
    }
    addsfamille(sfamilles: any) {
        const itemsRef = this.db.list(`sfamille`);
        return itemsRef.push(sfamilles);
    }
    addachat(achat: any) {
        const itemsRef = this.db.list(`achats`);
        return itemsRef.push(achat);
    }
    addstockage(stockage: any) {
        const itemsRef = this.db.list(`stockages`);
        return itemsRef.push(stockage);
    }
    addingredient(ingredients: any) {
        const itemsRef = this.db.list(`ingredients`);
        return itemsRef.push(ingredients);
    }
      addboisson(boissons: any) {
        const itemsRef = this.db.list(`boissons`);
        return itemsRef.push(boissons);
    }
    addunite(unites: any) {
        const itemsRef = this.db.list(`unites`);
        return itemsRef.push(unites);
    }
    addclasse(classes: any) {
        const itemsRef = this.db.list(`classes`);
        return itemsRef.push(classes);
    }

    //get
    getCategories() {
        return this.db.list(`categories`).snapshotChanges();
    }

    getfamilles() {
        return this.db.list(`familles`).snapshotChanges();
    }
    getsfamilles() {
        return this.db.list(`sfamille`).snapshotChanges();
    }
    getachats() {
        return this.db.list(`achats`).snapshotChanges();
    }
    getstockages() {
        return this.db.list(`stockages`).snapshotChanges();
    }
    getingredients() {
        return this.db.list(`ingredients`).snapshotChanges();
    }
      getboissons() {
        return this.db.list(`boissons`).snapshotChanges();
    }
    getunites() {
        return this.db.list(`unites`).snapshotChanges();
    }
    getclasses() {
        return this.db.list(`classes`).snapshotChanges();
    }



}