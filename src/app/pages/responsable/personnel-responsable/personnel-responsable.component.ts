import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {MatDialog} from '@angular/material';
import { CPersonnelComponent } from 'src/app/modals/CrudPersonnel/cpersonnel/cpersonnel.component';
import { SelectionModel } from '@angular/cdk/collections';


export interface Personnel {
 nom: string;
  id: number;
  prenom: string;
  mail: string;
  datenaiss: string;
  telephone: string;
  cin:string;
}
 
//initialisations plats 

const ELEMENT_DATA: Personnel[] = [
  {id: 1, nom:'nermine',prenom: 'ayadi', mail:'nermine.ayadi15@gmail.com',datenaiss:'17/09/1996',telephone:"25684557",cin: "09854067"},
  {id: 2, nom:'mariem',prenom: 'chaieb', mail:'mariemch@gmail.com',datenaiss:'11/10/1997',telephone:"25684557",cin: "09854067"},
  {id: 3, nom:'sally',prenom: 'ayadi', mail:'sally.ayadi@gmail.com',datenaiss:'04/02/1995',telephone:"26862856",cin: "09854067"},
  {id: 4, nom:'ahmed',prenom: 'salah', mail:'ahmedsalah@gmail.com',datenaiss:'22/09/1996',telephone:"25684557",cin: "09854067"},
];
  
@Component({
    selector: 'app-personnel-responsable',
    templateUrl: './personnel-responsable.component.html',
    styleUrls: ['./personnel-responsable.component.scss']
})
export class PersonnelResponsableComponent implements OnInit {
  displayedColumns: string[] = ['select','id', 'nom', 'prenom', 'mail','datenaiss','telephone','cin','actions'];

    dataSource = new MatTableDataSource<Personnel >(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    selection = new SelectionModel<Personnel >(true, []);

    
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(CPersonnelComponent, {
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
  checkboxLabel(row?: Personnel ): string {
      if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
        
}
