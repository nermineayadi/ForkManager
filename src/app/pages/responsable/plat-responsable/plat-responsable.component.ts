import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CplatComponent } from './modals/CPlat/cplat.component';
import { DetailPComponent } from './modals/detail-p/detail-p.component';
import { SupprimerComponent } from './modals/supprimer/supprimer.component';
import { SelectionModel } from '@angular/cdk/collections';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
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
     //csv 
   dtHolidays :any;

  csvOptions = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Plats List :',
    useBom: true,
    noDownload: false,
    headers: ["Holiday ID", "Holiday Date", "Holiday Comment", "Holiday Status"]
  };
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
  

  // 
      this.dataSource.paginator = this.paginator;
    }
    downloadCSV () {
        //this.dtHolidays: JSONDATA, HolidayList: nom du fichier CSV, this.csvOptions: options de fichier
        new AngularCsv ( this . dtHolidays , "HolidayList" , this . csvOptions ); 
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
  