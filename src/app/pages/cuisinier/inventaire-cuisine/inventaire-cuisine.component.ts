import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatDialog,  MatSort, MatTableDataSource
} from '@angular/material';
import { InventaireCComponent  } from 'src/app/modals/CrudIventaire/Inventaire/InventaireC.component';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Inventaire } from 'src/app/models/inventaire.model';

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
      private shareservice : ShareService,) {}

      ngOnInit() {

        this.route.data.subscribe((data) => {
           data.inventaire.inventaires.forEach(element => {
             if (element.payload.val().date == this.date){
               console.log('item' + element.payload.val().date)
               console.log('date'+ this.date)
               console.log(element.payload.val().ingredient)
               this.invToday= element.key;
             this.inventaire.push(...element.payload.val().ingredient)}
           });
           this.dataSource = new MatTableDataSource<any>(this.inventaire);
          this.dataSource.paginator = this.paginator;
          this.inv= data.inventaire

         })
console.log(this.inventaire)      }


    openDialog(): void {
      const dialogRef = this.dialog.open(InventaireCComponent , {
        //taille du modal 
        maxWidth: '600px',
        data:{ inventaire :this.inv , today : this.inventaire ,invToday:this.invToday}
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;c
      });
    }

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase() 
    }
}
