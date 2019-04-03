import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { InventaireBComponent } from 'src/app/modals/CrudInventaireB/inventaire-b/inventaire-b.component';
export interface Boisson {
  boisson: string;
  position: number;
  categorie: string;
  famille: string;
  nbrbouteilles:number;
}
 
//initialisations Boisson 

const ELEMENT_DATA: Boisson[] = [
  {position: 1, boisson: 'becks', categorie: 'alcoolisé', famille: 'biére',nbrbouteilles:300},
  {position: 2, boisson: 'celtia', categorie: 'alcoolisé', famille: 'biére',nbrbouteilles:250},
  {position: 3, boisson: 'celtia', categorie: 'alcoolisé' ,famille: 'biére',nbrbouteilles:200},
  {position: 4, boisson: 'jackDaniel', categorie: 'alcoolisé', famille: 'whiskey',nbrbouteilles:30},
  {position: 5, boisson: 'coca ', categorie: 'Non alcoolisé ', famille: 'boisoo gazeuse',nbrbouteilles:70},
  {position: 6, boisson: 'magon', categorie: 'alcoolisé', famille: 'vin',nbrbouteilles:50},
  {position: 7, boisson: 'eau', categorie: 'Non alcoolisé', famille: 'eau',nbrbouteilles:200},
  {position: 8, boisson: 'vodka', categorie: 'alcoolisé', famille: 'liqueur',nbrbouteilles:30},
  {position: 9, boisson: 'jus', categorie: 'Non alcoolisé', famille: 'jus',nbrbouteilles:15},
  {position: 10, boisson: 'jour et nuit', categorie: 'alcoolisé', famille: 'vin',nbrbouteilles:250},
];
@Component({
  selector: 'app-inventraire-bar',
  templateUrl: './inventraire-bar.component.html',
  styleUrls: ['./inventraire-bar.component.scss']
})
export class InventraireBarComponent implements OnInit {

  displayedColumns: string[] = ['position', 'boisson', 'categorie', 'famille','nbrbouteilles'];

  dataSource = new MatTableDataSource<Boisson>(ELEMENT_DATA);

  constructor(public dialog: MatDialog) {}
  //pagination
  //tri
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  openDialog(): void {
    const dialogRef = this.dialog.open(InventaireBComponent, {
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
