import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/Inventaire/InventaireC.component';
export interface Ingrédient {
    ingredient: string;
    categorie: string;
    nhportion: number;
    quantite: number ;
  }
  const ELEMENT_DATA: Ingrédient  [] = [
    {ingredient: 'patate' ,  categorie: 'viande',nhportion: 25,quantite:2},
    {ingredient: 'poulet', categorie: 'végétale', nhportion:54 ,quantite:4},
    {ingredient: 'steack',  categorie: 'poisson' ,nhportion:41 ,quantite:7},
    {ingredient:'patte',  categorie:'laitier' , nhportion:41 ,quantite:47},
    {ingredient:'pain' ,  categorie: 'semoule', nhportion:47 ,quantite:5}, ];
@Component({
    selector: 'app-inventaire-cuisine',
    templateUrl: './inventaire-cuisine.component.html',
    styleUrls: ['./inventaire-cuisine.component.scss']
})
export class InventaireCuisineComponent implements OnInit {
    displayedColumns: string[] = ['ingredient',  'categorie', 'nhportion','quantite'];

    dataSource = new MatTableDataSource<Ingrédient >(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(InventaireCComponent , {
        //taille du modal 
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    //pagination
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }

      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
