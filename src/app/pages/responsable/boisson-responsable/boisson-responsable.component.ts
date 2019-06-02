import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { PlatResponsableService } from '../plat-responsable/plat-responsable.service';
import { UBoissonComponent } from './modals/UBoisson/uBoisson.component';
import { SupprimerBComponent } from './modals/supprimer/supprimerB.component';
import { CBoissonComponent } from './modals/Cboisson/cBoisson.component';
import { Boisson } from 'src/app/models/boisson.model';

 
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
  displayedColumns: string[] = ['code', 'boisson', 'classe', 'famille', 'sfamille' , 'prix', 'actions'];

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

   
   getBoissons(){
    this.shareservice.getBoissons().subscribe(data => {
      console.log(data)
      this.boissons = [];
      data.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
      })
      console.log(this.boissons)
      this.dataSource = new MatTableDataSource<Boisson>(this.boissons);
      console.log('The dialog was closed');
    })
   }
}
