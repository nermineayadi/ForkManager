import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { DetailPComponent } from './modals/detail-p/detail-p.component';
import { SupprimerComponent } from './modals/supprimer/supprimer.component';
import { SelectionModel } from '@angular/cdk/collections';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv'
import { ActivatedRoute } from '@angular/router';
import { UplatComponent } from './modals/UPlat/uplat.component';
import { CplatComponent } from './modals/CPlat/cplat.component';
import { ShareService } from 'src/app/services/share.service';
import { Plat } from 'src/app/models/plat.model';
import { Location } from '@angular/common';

//initialisations plats 


@Component({
  selector: 'app-plat-responsable',
  styleUrls: ['./plat-responsable.component.scss'],
  templateUrl: './plat-responsable.component.html',
})
export class PlatResponsableComponent implements OnInit {
  //var
  plats: any[] = [];
  valides: any[] = [];
  invalides: any[] = [];
  archives: any[] = [];

  plat: any;
  dataSourceV: MatTableDataSource<any>;
  dataSourceI: MatTableDataSource<any>;
  dataSourceA: MatTableDataSource<any>;

  displayedColumnsA: string[] = ['plat', 'categorie', 'famille', 'sfamille', 'detail'];
  displayedColumnsI: string[] = ['plat', 'categorie', 'famille', 'sfamille','actions'];
  displayedColumnsV: string[] = ['plat', 'categorie', 'famille', 'sfamille', 'detail', 'actions'];


  panelOpenState = false;
  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // constructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private shareservice: ShareService,
    private location: Location
  ) { }

  //onInit
  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
      data.plat.plats.forEach(element => {
        this.RemplirTables(element)
      });
      this.DataTables();
      this.plat = data.plat;
    })

  }
  //modal ajout plat
  openCplat(): void {
    const dialogRef = this.dialog.open(CplatComponent, {
      data: this.plat
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getPlats().subscribe(data => {
        //console.log(data)
        this.initialiserTables();
        data.forEach(element => {
          this.RemplirTables(element)
        });
        this.DataTables();
    })
  })
  }
  //modal detail plat
  openDetail(element: any): void {
    console.log(element);
    if (element.hasOwnProperty("ingredient")||element.hasOwnProperty("srecette")) {
      const dialogRef = this.dialog.open(DetailPComponent, {
        data: element
      });

      dialogRef.afterClosed().subscribe(result => {
        // console.log('The dialog was closed');
      });
    }
    else {
      this.shareservice.showMsg("Ce plat n'est pas encore validé")
    }
  }
  //modal supprime plat
  openSupprime(element: any): void {
    const dialogRef = this.dialog.open(SupprimerComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getPlats().subscribe(data => {
        //console.log(data)
        this.initialiserTables();    
            data.forEach(element => {
          this.RemplirTables(element)
        });
        this.DataTables();

    })
  })
}
  //modal modifier plat
  openEdit(row: any): void {
    const dialogRef = this.dialog.open(UplatComponent, {
      data: { key: row.key, value: row, plat: this.plat }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getPlats().subscribe(data => {
        //console.log(data)
        this.initialiserTables();
        data.forEach(element => {
          this.RemplirTables(element)
        });
        this.DataTables();

    })
  })
  }
  initialiserTables(){
    this.plats = [];
    this.valides = [];
    this.invalides = [];
    this.archives = [];
  }
  RemplirTables(element: any) {

    this.plats.push({ key: element.key, ...element.payload.val() })

    if (element.payload.val().valide && !element.payload.val().archive) {
      this.valides.push({ key: element.key, ...element.payload.val() })
    }
    else {
      if (!element.payload.val().valide && !element.payload.val().archive) {
        this.invalides.push({ key: element.key, ...element.payload.val() })
      }
      else
        if (element.payload.val().archive) {
          this.archives.push({ key: element.key, ...element.payload.val() })

        }
    }
   
  }
  DataTables(){
    this.dataSourceV = new MatTableDataSource<Plat>(this.valides);
    this.dataSourceV.paginator = this.paginator;
    this.dataSourceI = new MatTableDataSource<Plat>(this.invalides);
    this.dataSourceI.paginator = this.paginator;
    this.dataSourceA = new MatTableDataSource<Plat>(this.archives);
    this.dataSourceA.paginator = this.paginator;
  }

  //filtrer

  applyFilterV(filterValue: string) {
    this.dataSourceV.filter = filterValue.trim().toLowerCase();
  }
  applyFilterI(filterValue: string) {
    this.dataSourceI.filter = filterValue.trim().toLowerCase();
  }
  applyFilterA(filterValue: string) {
    this.dataSourceA.filter = filterValue.trim().toLowerCase();
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }


  //csv 
  dtHolidays: any[] = [
    { "id": 101, "Holiday_Date": "21/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 102, "Holiday_Date": "22/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 103, "Holiday_Date": "23/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "En attente" },
    { "id": 104, "Holiday_Date": "24/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 105, "Holiday_Date": "25/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "NotActive" },
    { "id": 106, "Holiday_Date": "26/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 107, "Holiday_Date": "27/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "En attente" },
    { "id": 108, "Holiday_Date": "28/02/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 109, "Holiday_Date": "02/03/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "NotActive" },
    { "id": 110, "Holiday_Date": "03/04/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" },
    { "id": 111, "Holiday_Date": "21/05/2019", "Holiday_Comment": "calendrier de vacances d'entreprise de 2019.", "Holiday_Status": "Actif" }
  ];

  csvOptions = {
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true,
    showTitle: true,
    title: 'Plats List :',
    useBom: true,
    noDownload: false,
    headers: ["Holiday ID", "Holiday Date", "Holiday Comment", "Holiday Status"]
  };
  downloadCSV() {
    //this.dtHolidays: JSONDATA, HolidayList: nom du fichier CSV, this.csvOptions: options de fichier
    new AngularCsv(this.dataSourceV, "HolidayList", this.csvOptions);
  }


}
