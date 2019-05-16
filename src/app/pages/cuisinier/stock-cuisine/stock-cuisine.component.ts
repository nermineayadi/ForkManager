import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource,MatPaginator, MatSort, MatDialog} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Ingredient } from 'src/app/models/ingredient.model';


@Component({
    selector: 'app-stock-cuisine',
    templateUrl: './stock-cuisine.component.html',
    styleUrls: ['./stock-cuisine.component.scss']
})
export class StockCuisineComponent implements OnInit {
   //var
   ingredients: any[] = [];
   ingredient: any;
   dataSource: MatTableDataSource<any>;
   displayedColumns: string[] = [ 'code', 'ingredient', 'classe', 'famille', 'sfamille' , 'prix'];
 
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
       data.stock.ingredients.forEach(element => {
         this.ingredients.push({ key: element.key, ...element.payload.val() })
       });
       console.log(this.ingredients)
       this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients);
       this.dataSource.paginator = this.paginator;
       this.ingredient = data.stock;

     })
 
   }

      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


}
