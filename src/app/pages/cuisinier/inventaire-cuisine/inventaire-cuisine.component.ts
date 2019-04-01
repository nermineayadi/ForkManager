import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog,  MatSort
} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/Inventaire/InventaireC.component';
export interface Ingrédient {
    ingredient: string;
    categorie: string;
    nbportion: number;
    quantite: number ;
  }
  const ELEMENT_DATA: Ingrédient  [] = [
    {ingredient: 'patate' ,  categorie: 'viande',nbportion: 25,quantite:2},
    {ingredient: 'poulet', categorie: 'végétale', nbportion:54 ,quantite:4},
    {ingredient: 'steack',  categorie: 'poisson' ,nbportion:41 ,quantite:7},
    {ingredient:'patte',  categorie:'laitier' , nbportion:41 ,quantite:47},
    {ingredient:'pain' ,  categorie: 'semoule', nbportion:47 ,quantite:5}, ];
@Component({
    selector: 'app-inventaire-cuisine',
    templateUrl: './inventaire-cuisine.component.html',
    styleUrls: ['./inventaire-cuisine.component.scss']
})
export class InventaireCuisineComponent implements OnInit {
    displayedColumns: string[] = ['ingredient',  'categorie', 'nbportion','quantite'];

    dataSource = new MatTableDataSource<Ingrédient >(ELEMENT_DATA);
  

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


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
      this.dataSource.sort = this.sort;

    }

      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
}
