import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog,  MatSort
} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/Inventaire/InventaireC.component';
export interface Ingrédient {
    id: string;
    poste: string;
    date: Date;
    
  }
  const ELEMENT_DATA: Ingrédient  [] = [
    {id: '11' ,  poste: 'cuisine',date: new Date("2018-03-16")},
    {id: '21', poste: 'bar', date:new Date("2018-03-16") },
    {id: '12',  poste: 'cuisine' ,date:new Date("2019-03-17") },
    {id:'22',  poste:'bar' , date:new Date("2018-09-17") },
    ];
@Component({
    selector: 'app-inventaire-responsable',
    templateUrl: './inventaire-responsable.component.html',
    styleUrls: ['./inventaire-responsable.component.scss']
})
export class InventaireResponsableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'poste', 'date','actions'];

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
