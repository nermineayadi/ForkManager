import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { CPersonnelComponent } from 'src/app/modals/CrudPersonnel/cpersonnel/cpersonnel.component';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { DPersonnelComponent } from 'src/app/modals/CrudPersonnel/DPersonnel/dpersonnel.component';
import { Location } from '@angular/common';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-personnel-responsable',
  templateUrl: './personnel-responsable.component.html',
  styleUrls: ['./personnel-responsable.component.scss']
})
export class PersonnelResponsableComponent implements OnInit {


 displayedColumns: string[] = [ 'avatar', 'nom', 'prenom', 'telephone','mail', 'fonction','actions'];

 //var
 users: any[] = [];
 user: any;
 dataSource: MatTableDataSource<any>;

 //pagination
 @ViewChild(MatPaginator) paginator: MatPaginator;
 //sort
 @ViewChild(MatSort) sort: MatSort;


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
    //  console.log(data)
     data.personnel.users.forEach(element => {
       this.users.push({ key: element.key, ...element.payload.val() })
     });
    //  console.log(this.users)
     this.dataSource = new MatTableDataSource<User>(this.users);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;

     this.user = data.personnel;

   })

 }
  openCPersonnel(): void {
    const dialogRef = this.dialog.open(CPersonnelComponent, {
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getUsers().subscribe(data => {
        // console.log(data)
        this.users = [];
        data.forEach(element => {
          this.users.push({ key: element.key, ...element.payload.val() })
        })
        // console.log(this.users)
        this.dataSource = new MatTableDataSource<User>(this.users);
        // console.log('The dialog was closed');
      })
    })
  }
  openSupprime(element : any): void {
    const dialogRef = this.dialog.open(DPersonnelComponent, {
      data: element
    });
    dialogRef.afterClosed().subscribe(result => {
      this.shareservice.getUsers().subscribe(data => {
        // console.log(data)
        this.users = [];
        data.forEach(element => {
          this.users.push({ key: element.key, ...element.payload.val() })
        })
        // console.log(this.users)
        this.dataSource = new MatTableDataSource<User>(this.users);
        // console.log('The dialog was closed');
      })

    })
  }
 

  //filtrer

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
