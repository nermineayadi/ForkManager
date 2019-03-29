import { Component, OnInit } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatSort} from '@angular/material';

export interface Ingrédient {
    id: number;
    ingredient: string;
    categorie: string;
    poids: number;
    quantite: number ;
    unite : string;
  }

// /** Constants used to fill up our data base. */
const ELEMENT_DATA: Ingrédient  [] = [
    {id : 1,ingredient: 'patate' ,  categorie: 'viande',poids: 25,quantite:2, unite:'kg'},
    {id:2,ingredient: 'poulet', categorie: 'végétale', poids:54 ,quantite:4, unite:'kg'},
    {id:3,ingredient: 'steack',  categorie: 'poisson' ,poids:41 ,quantite:7, unite:'kg'},
    {id:4,ingredient:'patte',  categorie:'laitier' , poids:41 ,quantite:47, unite:'kg'},
    {id:5,ingredient:'pain' ,  categorie: 'semoule', poids:47 ,quantite:5, unite:'kg'},]
@Component({
    selector: 'app-stock-cuisine',
    templateUrl: './stock-cuisine.component.html',
    styleUrls: ['./stock-cuisine.component.scss']
})
export class StockCuisineComponent implements OnInit {

    displayedColumns: string[] = ['id', 'ingredient', 'categorie', 'quantite','unité'];
    dataSource = new MatTableDataSource<Ingrédient>(ELEMENT_DATA);
    constructor() { }

    ngOnInit(): void { }
}
