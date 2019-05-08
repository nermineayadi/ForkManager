import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { SupprimerComponent } from 'src/app/modals/ModalSupprimer/supprimer/supprimer.component';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { PlatResponsableService } from '../plat-responsable/plat-responsable.service';
import { Plat } from 'src/app/srecette/plat.model';
import { UBoissonComponent } from './modals/UBoisson/uBoisson.component';
import { Boisson } from 'src/app/srecette/boisson.model';
import { SupprimerBComponent } from './modals/supprimer/supprimerB.component';
import { CBoissonComponent } from './modals/Cboisson/cBoisson.component';

 
@Component({
    selector: 'app-boisson-responsable',
    templateUrl: './boisson-responsable.component.html',
    styleUrls: ['./boisson-responsable.component.scss']
})
export class BoissonResponsableComponent implements OnInit {
   //var
  boissons: any[] = [];
  boisson: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['select', 'code', 'boisson', 'classe', 'famille', 'sfamille' , 'prix', 'actions'];

  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // constructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private shareservice: ShareService,
    private platResponsableService: PlatResponsableService
  ) { }

  //onInit
  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
      data.boisson.boissons.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
      });
      console.log(this.boissons)
      this.dataSource = new MatTableDataSource<Boisson>(this.boissons);
      this.dataSource.paginator = this.paginator;
      this.boisson = data.boisson;

    })

  }
   //modal ajout plat
  openCBoisson(): void {
    console.log(this.boisson.classes[0].payload.val());
    const dialogRef = this.dialog.open(CBoissonComponent, {
      data: this.boisson
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getBoissons();

    });
  }
  
  //modal supprime plat
  openSupprime(element : any): void {
    const dialogRef = this.dialog.open(SupprimerBComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getBoissons();


    })
  }
  //modal modifier plat
  openEdit(row: any): void {
    const dialogRef = this.dialog.open(UBoissonComponent, {
      data: { key: row.key, value: row, boisson: this.boisson }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getBoissons();

    })
  }
    //pagination


      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    selection = new SelectionModel<any>(true, []);

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
   getBoissons(){
    this.shareservice.getBoissons().subscribe(data => {
      console.log(data)
      this.boissons = [];
      data.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
      })
      console.log(this.boissons)
      this.dataSource = new MatTableDataSource<Plat>(this.boissons);
      console.log('The dialog was closed');
    })
   }
}
