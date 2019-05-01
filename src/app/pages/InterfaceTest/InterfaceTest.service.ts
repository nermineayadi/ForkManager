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
      addboisson(boisson: any) {
        const itemsRef = this.db.list(`boissons`);
        console.log(boisson)
        return itemsRef.push(boisson);
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