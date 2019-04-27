import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CplatComponent } from './modals/CPlat/cplat.component';
import { DetailPComponent } from './modals/detail-p/detail-p.component';
import { SupprimerComponent } from './modals/supprimer/supprimer.component';
import { SelectionModel } from '@angular/cdk/collections';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { PlatResponsableService } from './plat-responsable.service';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/database';
import { UplatComponent } from './modals/UPlat/uplat.component';

  //initialisations plats 

 
  @Component({
    selector: 'app-plat-responsable',
    styleUrls: ['./plat-responsable.component.scss'],
    templateUrl: './plat-responsable.component.html',
  })
  export class PlatResponsableComponent implements OnInit {
   plat: any;

    //csv 
   dtHolidays :any;

  csvOptions = {
    //fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Plats List :',
    useBom: true,
    noDownload: false,
    headers: ["Holiday ID", "Holiday Date", "Holiday Comment", "Holiday Status"]
  };
    displayedColumns: string[] = ['select','plat', 'categorie', 'famille','sfamille','detail','actions'];

    dataSource: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    selection = new SelectionModel<any>(true, []);

    
    constructor(public dialog: MatDialog,           
         private route: ActivatedRoute,
      private db: AngularFireDatabase,
      ) {}
      
      async ngOnInit() {
        // Vos données à télécharger dans un fichier csv.
      this. dtHolidays = [
        { "id" : 101 , "Holiday_Date" : "21/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 102 , "Holiday_Date" : "22/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 103 , "Holiday_Date" : "23/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "En attente" }, 
        { "id" : 104 , "Holiday_Date" : "24/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 105 , "Holiday_Date" : "25/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "NotActive" }, 
        { "id" : 106 , "Holiday_Date" : "26/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 107 , "Holiday_Date" : "27/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "En attente" }, 
        { "id" : 108 , "Holiday_Date" : "28/02/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 109 , "Holiday_Date" : "02/03/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "NotActive" }, 
        { "id" : 110 , "Holiday_Date" : "03/04/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" }, 
        { "id" : 111 , "Holiday_Date" : "21/05/2019" , "Holiday_Comment" : "calendrier de vacances d'entreprise de 2019." , "Holiday_Status" : "Actif" } 
      ]; 
    
      
        this.route.data.subscribe((data) => {
          console.log(data)
          this.dataSource = new MatTableDataSource(data.plat.plats);
          this.dataSource.paginator = this.paginator;
         this.plat = data.plat;
        })
    
      
    // 
      }
      //modal ajout plat
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
      openEdit(row : any):void{
        const dialogRef = this.dialog.open(UplatComponent, {
          data: row
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }
    //pagination

    downloadCSV () {
        //this.dtHolidays: JSONDATA, HolidayList: nom du fichier CSV, this.csvOptions: options de fichier
        new AngularCsv ( this.dataSource , "HolidayList" , this . csvOptions ); 
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
  