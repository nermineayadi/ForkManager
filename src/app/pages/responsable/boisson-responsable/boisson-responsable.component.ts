import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CBoissonComponent } from 'src/app/modals/CrudBoisson/CBoisson/cboisson.component';
import { SelectionModel } from '@angular/cdk/collections';
import { SupprimerComponent } from 'src/app/modals/ModalSupprimer/supprimer/supprimer.component';
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
    selector: 'app-boisson-responsable',
    templateUrl: './boisson-responsable.component.html',
    styleUrls: ['./boisson-responsable.component.scss']
})
export class BoissonResponsableComponent implements OnInit {
    displayedColumns: string[] = ['select','position', 'boisson', 'categorie', 'famille','nbrbouteilles'];

    dataSource = new MatTableDataSource<Boisson>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    selection = new SelectionModel<Boisson>(true, []);

    
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(CBoissonComponent, {
        //taille du modal 
        
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    openDialog2(): void {
      const dialogRef = this.dialog.open(SupprimerComponent, {
        //taille du modal 
        
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
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


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
      this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Boisson): string {
      if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
