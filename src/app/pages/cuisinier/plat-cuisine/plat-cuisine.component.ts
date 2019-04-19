import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, } from '@angular/material';
import { CplatComponent } from '../modals/CPlat/cplat.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { PlatService } from './plat.service';
import { DetailPComponent } from '../modals/detail-p/detail-p.component';
import { SupprimerComponent } from '../modals/supprimer/supprimer.component';

//initialisations plats 



/**
 * @title Table with filtering
 */
@Component({
  selector: 'app-plat-cuisine',
  styleUrls: ['./plat-cuisine.component.scss'],
  templateUrl: './plat-cuisine.component.html',
})
export class PlatCuisineComponent implements OnInit {
  plats: AngularFireList<any>
  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['select', 'plat', 'categorie', 'famille', 'sfamille', 'detail','actions'];
  selection = new SelectionModel<any>(true, []);
  plat: any;

  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private db: AngularFireDatabase,
              private platService : PlatService
              ) {
               }


  @ViewChild(MatPaginator) paginator: MatPaginator;
  //pagination
   ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
      this.dataSource = new MatTableDataSource(data.plat.plats);
      this.dataSource.paginator = this.paginator;
     this.plat = data.plat;
    })

  }
  
  openCplat(): void {
    const dialogRef = this.dialog.open(CplatComponent, {
      data: this.plat
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDetail(key : string) : void {

    const dialogRef = this.dialog.open(DetailPComponent, {
      //taille du modal 
      height: '400px',
      data: key
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openSupprime(key : string):void{
    const dialogRef = this.dialog.open(SupprimerComponent, {
      data: key
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
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
checkboxLabel(row?: any): string {
    if (!row) {
        return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
}



}