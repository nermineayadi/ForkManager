import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog,  MatSort
} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/InventaireC/InventaireC.component';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Location } from '@angular/common';
import { VerifIComponent } from './verifI/verifI.component';


@Component({
    selector: 'app-inventaire-responsable',
    templateUrl: './inventaire-responsable.component.html',
    styleUrls: ['./inventaire-responsable.component.scss']
})
export class InventaireResponsableComponent implements OnInit {
    displayedColumns: string[] = ['id', 'poste', 'date','actions'];
data:any;
    dataSource = new MatTableDataSource<any>();
    // data
    inventaireCuisineV : any[]=[];
    inventaireCuisineN : any[]=[];
    inventaireBarV : any[]=[];
    inventaireBarN : any[]=[];
    // data source
    dtinventaireCuisineV = new MatTableDataSource<any>();
    dtinventaireCuisineN = new MatTableDataSource<any>();
    dtinventaireBarV = new MatTableDataSource<any>();
    dtinventaireBarN = new MatTableDataSource<any>();

    // columns
    displayedColumnsV: string[] = ['date', 'Emetteur','detail'];
    displayedColumnsN: string[] = ['date', 'Emetteur','actions'];


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;


    constructor(public dialog: MatDialog,private route: ActivatedRoute,
      private shareservice : ShareService,
     private location: Location) 
     {}
    
    
     openDialog(): void {
      const dialogRef = this.dialog.open(InventaireCComponent , {
        //taille du modal 
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    //pagination
    ngOnInit() {
      this.route.data.subscribe((data) => {
        data.inventaire.inventairesCuisine.forEach((element :any)=> {
          if(element.payload.val().valid ==true)
          this.inventaireCuisineV.push(element.payload.val())
        else{
          this.inventaireCuisineN.push(element.payload.val())
        }   
       })
       data.inventaire.inventairesBar.forEach((element:any )=> {
        if(element.valid ==true)
        this.inventaireBarV.push(element)
  
      else{
        this.inventaireBarN.push(element)
       }});
       this.data=data.inventaire;

      })
     this.DataTables()
     console.log(this.dtinventaireBarV.data);
     console.log(this.dtinventaireBarN.data[0].payload.val());


    }
    DataTables(){
      this.dtinventaireCuisineV = new MatTableDataSource<any>(this.inventaireCuisineV);
      this.dtinventaireCuisineV.paginator = this.paginator;
      this.dtinventaireCuisineN = new MatTableDataSource<any>(this.inventaireCuisineN);
      this.dtinventaireCuisineN.paginator = this.paginator;
      this.dtinventaireBarV = new MatTableDataSource<any>(this.inventaireBarV);
      this.dtinventaireBarV.paginator = this.paginator;
      this.dtinventaireBarN = new MatTableDataSource<any>(this.inventaireBarN);
      this.dtinventaireBarN.paginator = this.paginator;
    }
    openVerif(element):void{
      const dialogRef = this.dialog.open(VerifIComponent, {
        width: '700px',
        data: {inventaire:element ,data : this.data}
        
      });
      dialogRef.afterClosed().subscribe(result => {
      //   this.shareservice.getPlats().subscribe(data => {
      //     //console.log(data)
      //     this.initialiserTables();
      //     data.forEach(element => {
      //       this.RemplirTables(element)
      //     });
      //     this.DataTables();
      // })
    })
    }

      //filtrer

    applyFilterBV(filterValue: string) {
      this.dtinventaireBarV.filter = filterValue.trim().toLowerCase();
    }
    applyFilterCV(filterValue: string) {
      this.dtinventaireCuisineV.filter = filterValue.trim().toLowerCase();
    }
    applyFilterCN(filterValue: string) {
      this.dtinventaireCuisineN.filter = filterValue.trim().toLowerCase();
    }
    applyFilterBN(filterValue: string) {
      this.dtinventaireBarN.filter = filterValue.trim().toLowerCase();
    }
    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
    profileUID(uid : any):string{
      var profile: any ;
  this.data.users.forEach((element:any) => {
    console.log(element.key)
    console.log(uid)
     if(element.key==uid )
     console.log(element.key)
     profile=element.payload.val()
   });
  // this.shareservice.getUser(uid).subscribe((data)=>{
  //   profile=data.payload.val()
  // })
  console.log(profile)
 return profile? profile.nom + ' '+profile.prenom:'changed' 
    }
  
}
