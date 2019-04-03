import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CPortionComponent } from 'src/app/modals/CrudPortion/cportion/cportion.component';
export interface Portionnage {
    position: number;
    ingredient: string;
    categorie: string;
    nbportion: number;
    quantite: number;
  }
  const ELEMENT_DATA: Portionnage[] = [
    { position: 1,ingredient: "patate", categorie: "végétale", nbportion: 25, quantite: 2 },
    { position: 2,ingredient: "poulet", categorie: "viande", nbportion: 54, quantite: 4 },
    { position: 3,ingredient: "steack", categorie: "viande", nbportion: 41, quantite: 7 },
    { position: 4,ingredient: "spaguetti", categorie: "pâte", nbportion: 41, quantite: 47 },
    {position: 5, ingredient: "pain", categorie: "semoule", nbportion: 47, quantite: 5 }
  ];
@Component({
  selector: 'app-stock-portionnage',
  templateUrl: './stock-portionnage.component.html',
  styleUrls: ['./stock-portionnage.component.scss']
})
export class StockPortionnageComponent implements OnInit {

  displayedColumns: string[] = ['position',
  "ingredient",
  "categorie",
  "nbportion",
  "quantite",
  
];
dataSource = new MatTableDataSource<Portionnage>(ELEMENT_DATA);

@ViewChild(MatPaginator) paginator: MatPaginator;


selection = new SelectionModel<Portionnage >(true, []);


constructor(public dialog: MatDialog) {}

//pagination
ngOnInit() {
this.dataSource.paginator = this.paginator;
}

//filtrer

applyFilter(filterValue: string) {
this.dataSource.filter = filterValue.trim().toLowerCase();
}



}
