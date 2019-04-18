import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { MatSnackBar } from '@angular/material';

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
    addCategories(categories: any[]) {
        const itemsRef = this.db.list(`categories`);
        return itemsRef.push(categories);
    }

    addfamilles(familles: any[]) {
        const itemsRef = this.db.list(`familles`);
        return itemsRef.push(familles);
    }
    addsfamilles(sfamilles: any[]) {
        const itemsRef = this.db.list(`sfamille`);
        return itemsRef.push(sfamilles);
    }
    addachat(achat: any[]) {
        const itemsRef = this.db.list(`achat`);
        return itemsRef.push(achat);
    }
    addstockage(stockage: any[]) {
        const itemsRef = this.db.list(`stockage`);
        return itemsRef.push(stockage);
    }
    addingredients(ingredients: any[]) {
        const itemsRef = this.db.list(`ingredients`);
        return itemsRef.push(ingredients);
    }
      addboissons(boissons: any[]) {
        const itemsRef = this.db.list(`boissons`);
        return itemsRef.push(boissons);
    }
    addunites(unites: any[]) {
        const itemsRef = this.db.list(`unites`);
        return itemsRef.push(unites);
    }
    addclasses(classes: any[]) {
        const itemsRef = this.db.list(`classes`);
        return itemsRef.push(classes);
    }


}