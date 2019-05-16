import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource, MatDialog} from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { SupprimerBComponent } from '../boisson-responsable/modals/supprimer/supprimerB.component';
import { UIngredientComponent } from './modals/UIngredient/uIngredient.component';
import { CIngredientComponent } from './modals/CIngredient/cIngredient.component';
import { SupprimerIComponent } from './modals/supprimer/supprimerI.component';

@Component({
    selector: 'app-ingredient-responsable',
    templateUrl: './ingredient-responsable.component.html',
    styleUrls: ['./ingredient-responsable.component.scss']
})
export class IngredientResponsableComponent implements OnInit {
   //var
   ingredients: any[] = [];
   ingredient: any;
   dataSource: MatTableDataSource<any>;
   displayedColumns: string[] = [ 'code', 'ingredient', 'classe', 'famille', 'sfamille' , 'prix', 'actions'];
 
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
       data.ingredient.ingredients.forEach(element => {
         this.ingredients.push({ key: element.key, ...element.payload.val() })
       });
       console.log(this.ingredients)
       this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients);
       this.dataSource.paginator = this.paginator;
       this.ingredient = data.ingredient;

     })
 
   }
    // modal ajout plat
   openCingredient(): void {
     console.log(this.ingredient.classes[0].payload.val());
     const dialogRef = this.dialog.open(CIngredientComponent, {
       data: this.ingredient
     });
     dialogRef.afterClosed().subscribe((result) => {
       this.getingredients();
 
     });
   }
   
   //modal supprime plat
   openSupprime(element : any): void {
     const dialogRef = this.dialog.open(SupprimerIComponent, {
       data: element
     });
     dialogRef.afterClosed().subscribe(result => {
       this.getingredients();
 
 
     })
   }
   //modal modifier plat
   openEdit(row: any): void {
     const dialogRef = this.dialog.open(UIngredientComponent, {
       data: { key: row.key, value: row, ingredient: this.ingredient }
     });
 
     dialogRef.afterClosed().subscribe(result => {
       this.getingredients();
 
     })
   }
     //pagination
 
 

    //pagination


      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    getingredients(){
      this.shareservice.getIngredients().subscribe(data => {
        console.log(data)
        this.ingredients = [];
        data.forEach(element => {
          this.ingredients.push({ key: element.key, ...element.payload.val() })
        })
        console.log(this.ingredients)
        this.dataSource = new MatTableDataSource<Ingredient>(this.ingredients);
        console.log('The dialog was closed');
      })
     }

    
}
