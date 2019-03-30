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
    selector: 'app-portion-responsable',
    templateUrl: './portion-responsable.component.html',
    styleUrls: ['./portion-responsable.component.scss']
})
export class PortionResponsableComponent implements OnInit {
    displayedColumns: string[] = ['select','position',
        "ingredient",
        "categorie",
        "nbportion",
        "quantite",
        
      ];
      dataSource = new MatTableDataSource<Portionnage>(ELEMENT_DATA);
      
    @ViewChild(MatPaginator) paginator: MatPaginator;

   
    selection = new SelectionModel<Portionnage >(true, []);

    
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(CPortionComponent, {
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
  checkboxLabel(row?: Portionnage ): string {
      if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
