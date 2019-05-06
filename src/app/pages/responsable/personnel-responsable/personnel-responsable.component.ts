import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { MatDialog } from '@angular/material';
import { CPersonnelComponent } from 'src/app/modals/CrudPersonnel/cpersonnel/cpersonnel.component';
import { User } from 'src/app/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { DPersonnelComponent } from 'src/app/modals/CrudPersonnel/DPersonnel/dpersonnel.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-personnel-responsable',
  templateUrl: './personnel-responsable.component.html',
  styleUrls: ['./personnel-responsable.component.scss']
})
export class PersonnelResponsableComponent implements OnInit {


 displayedColumns: string[] = [  'nom', 'prenom', 'mail', 'fonction','actions'];

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

  

}
