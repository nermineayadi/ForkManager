import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatDialog,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from "@angular/material";
import { CCmdComponent } from "src/app/modals/CrudCCmd/CCmd/ccmd.component";
export interface Commande {
  ingredient: string;
  categorie: string;
  nbportion: number;
  quantite: number;
}
const ELEMENT_DATA: Commande[] = [
  { ingredient: "patate", categorie: "végétale", nbportion: 25, quantite: 2 },
  { ingredient: "poulet", categorie: "viande", nbportion: 54, quantite: 4 },
  { ingredient: "steack", categorie: "viande", nbportion: 41, quantite: 7 },
  { ingredient: "spaguetti", categorie: "pâte", nbportion: 41, quantite: 47 },
  { ingredient: "pain", categorie: "semoule", nbportion: 47, quantite: 5 }
];

@Component({
  selector: "app-commande-cuisine",
  templateUrl: "./commande-cuisine.component.html",
  styleUrls: ["./commande-cuisine.component.scss"]
})
export class CommandeCuisineComponent implements OnInit {
  displayedColumns: string[] = [
    "ingredient",
    "categorie",
    "nbportion",
    "quantite"
  ];
  dataSource = new MatTableDataSource<Commande>(ELEMENT_DATA);
  commande: any;
  route: any;

  constructor(public dialog: MatDialog) {}
  //pagination
  //tri
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
      this.route.data.subscribe((data)=>{
        this.commande = data.plat;
      })
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  openDialog(): void {
    const dialogRef = this.dialog.open(CCmdComponent, {
      //taille du modal
      width: "800px",
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
    });
  }

  //filtrer
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
