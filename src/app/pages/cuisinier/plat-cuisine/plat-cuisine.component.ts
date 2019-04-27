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

  displayedColumns: string[] = [ 'plat', 'categorie', 'famille', 'sfamille', 'detail'];
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





}