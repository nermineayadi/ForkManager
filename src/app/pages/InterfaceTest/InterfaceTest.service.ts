import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';


@Injectable()
export class TestService {
    constructor(private db: AngularFireDatabase) { }
    

    
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

    


}