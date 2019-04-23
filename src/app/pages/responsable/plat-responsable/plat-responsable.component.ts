import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CplatComponent } from './modals/CPlat/cplat.component';
import { DetailPComponent } from './modals/detail-p/detail-p.component';
import { SupprimerComponent } from './modals/supprimer/supprimer.component';
import { SelectionModel } from '@angular/cdk/collections';

export interface Plats {
    plat: string;
    position: number;
    categorie: string;
    famille: string;
    sfamille:string;
  }
   
  //initialisations plats 

  const ELEMENT_DATA: Plats[] = [
    {position: 1, plat: 'soupe au poulet', categorie: "entrée", famille: 'soupe',sfamille:"frick"},
    {position: 2, plat: 'césar', categorie: "entrée", famille: 'salade',sfamille:"verte"},
    {position: 3, plat: 'marguerita', categorie: "suite" ,famille: 'pizza',sfamille:"moyenne"},
    {position: 4, plat: 'spaguetti fruit de mer', categorie: "suite", famille: 'pate',sfamille:"spaguetti"},
    {position: 5, plat: 'escalope panné ', categorie: "suite", famille: 'volaille',sfamille:"escalope"},
    {position: 6, plat: 'steak grillé', categorie: "suite", famille: 'viande',sfamille:"steak"},
    {position: 7, plat: 'cordon bleu', categorie: "suite", famille: 'volaille',sfamille:"escalope"},
    {position: 8, plat: 'napolitaine', categorie: "suite", famille: 'pizza',sfamille:"petite"},
    {position: 9, plat: 'sandwitch thon', categorie: "suite", famille: 'léger',sfamille:"sandwitch"},
    {position: 10, plat: 'salade de fruit', categorie: "dessert", famille: 'salade',sfamille:"fruit"},
  ];
  @Component({
    selector: 'app-plat-responsable',
    styleUrls: ['./plat-responsable.component.scss'],
    templateUrl: './plat-responsable.component.html',
  })
  export class PlatResponsableComponent implements OnInit {
    displayedColumns: string[] = ['select','position', 'plat', 'categorie', 'famille','sfamille','actions'];

    dataSource = new MatTableDataSource<Plats>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    selection = new SelectionModel<Plats>(true, []);

    
    constructor(public dialog: MatDialog) {}
      //modal ajout plat
    openDialog(): void {
      const dialogRef = this.dialog.open(CplatComponent, {
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    // modal editer plat 
    openDialog1(): void {
      const dialogRef = this.dialog.open(DetailPComponent, {
        //taille du modal 
        
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    openDialog2(): void {
      const dialogRef = this.dialog.open(SupprimerComponent, {
        //taille du modal 
        
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    //pagination
    async ngOnInit() {
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
  checkboxLabel(row?: Plats): string {
      if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
    }
  