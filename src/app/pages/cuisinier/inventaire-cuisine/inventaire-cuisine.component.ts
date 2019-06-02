import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatDialog,  MatSort, MatTableDataSource
} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/InventaireC/InventaireC.component';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

import { InventaireCService } from 'src/app/modals/CrudIventaire/InventaireC/InventaireC.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-inventaire-cuisine',
    templateUrl: './inventaire-cuisine.component.html',
    styleUrls: ['./inventaire-cuisine.component.scss']
})
export class InventaireCuisineComponent implements OnInit {
    displayedColumns: string[] = ['code','ingredient','quantite','unite'];  
    date = new Date().toLocaleDateString();
    inventaire : any[]=[];
    ingredients: any[] = [
      {libelle: '', quantite: '' , unite: '' }
    ];
    inv:any;
    invToday:any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
  dataSource: any;


    constructor(public dialog: MatDialog,
      private route: ActivatedRoute,
      private shareservice : ShareService,
      private inventaireCService : InventaireCService,
      private location: Location) {}

      ngOnInit() {
        this.route.data.subscribe((data) => {
           data.inventaire.inventairesCuisine.forEach(element => {
             if (element.payload.val().date == this.date){
              //  console.log('item' + element.payload.val().date)
              //  console.log('date'+ this.date)
              //  console.log(element.payload.val().ingredient)
               this.invToday= element.key;
             this.inventaire.push(...element.payload.val().ingredient)}
           });
           if(!this.invToday){
            const obj = {
              valid :false ,
              date: this.date,
              token: localStorage.getItem('token'),
            };
            this.inventaireCService
            .ajoutInventaire(obj)
            .then((element: any) => { 
              this.invToday= element.key;
            })
           }
           this.dataSource = new MatTableDataSource<any>(this.inventaire);
          this.dataSource.paginator = this.paginator;
          this.inv= data.inventaire
         })
          console.log(this.inventaire)     
 }
    openDialog(): void {
      const dialogRef = this.dialog.open(InventaireCComponent , {
        //taille du modal 
        maxWidth: '600px',
        data:{ inventaire :this.inv , today : this.inventaire , invToday:this.invToday}
      });
      
      dialogRef.afterClosed().subscribe(result => {
       
        this.shareservice.getInventairesCuisine().subscribe((data) => {
          this.inventaire=[]
          data.forEach((element : any) => {
            if (element.payload.val().date == this.date){
              console.log('item' + element.payload.val().date)
              console.log('date'+ this.date)
              console.log(element.payload.val().ingredient)
              this.invToday= element.key;
            this.inventaire.push(...element.payload.val().ingredient)}
          });
          this.dataSource = new MatTableDataSource<any>(this.inventaire);
         this.dataSource.paginator = this.paginator;
        })
      });
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase() 
    }
    cancel() {
      this.location.back(); // <-- go back to previous location on cancel
    }
}
