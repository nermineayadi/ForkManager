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

//initialisations plats 


@Component({
  selector: 'app-plat-responsable',
  styleUrls: ['./plat-responsable.component.scss'],
  templateUrl: './plat-responsable.component.html',
})
export class PlatResponsableComponent implements OnInit {
  //var
  plats: any[] = [];
  plat: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'plat', 'categorie', 'famille', 'sfamille', 'detail', 'actions'];

  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // constructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private shareservice: ShareService,
  ) { }

  //onInit
  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
      data.plat.plats.forEach(element => {
        this.plats.push({ key: element.key, ...element.payload.val() })
      });
      //console.log(this.plats)

      this.dataSource = new MatTableDataSource<Plat>(this.plats);
      this.dataSource.paginator = this.paginator;
      this.plat = data.plat;

    })

  }
  //modal ajout plat
  openCplat(): void {
    const dialogRef = this.dialog.open(CplatComponent, {
      data: this.plat
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.plats.push(result);
        this.dataSource = new MatTableDataSource<Plat>(this.plats);
      }
      //console.log(this.dataSource)
     // console.log('The dialog was closed');
    });
  }
  //modal detail plat
  openDetail(element: any): void {
    console.log(element);
    if (element.hasOwnProperty("ingredient")) {
      const dialogRef = this.dialog.open(DetailPComponent, {
        height: '400px',
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
  openSupprime(element : any): void {
    const dialogRef = this.dialog.open(SupprimerComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getPlats().subscribe(data => {
        //console.log(data)
        this.plats = [];
        data.forEach(element => {
          this.plats.push({ key: element.key, ...element.payload.val() })
        })
      //  console.log(this.plats)
        this.dataSource = new MatTableDataSource<Plat>(this.plats);
      //  console.log('The dialog was closed');
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
        console.log(data)
        this.plats = [];
        data.forEach(element => {
          this.plats.push({ key: element.key, ...element.payload.val() })
        })
        console.log(this.plats)
        this.dataSource = new MatTableDataSource<Plat>(this.plats);
        console.log('The dialog was closed');
      })

    })
  }


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
  ];;

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
    new AngularCsv(this.dataSource, "HolidayList", this.csvOptions);
  }


}
