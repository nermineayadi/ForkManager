import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DetailPService } from './detail-p.service';
export interface Ingredients {
  position: number;
  nom: string;
  quantite: number;
  unite: string;
}
export interface SousRecettes {
  position: number;
  nom: string;
  quantite: number;
  unite: string;
}
export interface Etapes {
  position: number;
  nom: string;
  description: string;
}
const ingredients: Ingredients[] = [
  { position: 1, nom: 'Hydrogen', quantite: 1.0079, unite: 'H' },
  { position: 2, nom: 'Helium', quantite: 4.0026, unite: 'He' },
  { position: 3, nom: 'Lithium', quantite: 6.941, unite: 'Li' },
  { position: 4, nom: 'Beryllium', quantite: 9.0122, unite: 'Be' },

];
const sousRecettes: SousRecettes[] = [
  { position: 1, nom: 'Hydrogen', quantite: 1.0079, unite: 'H' },
  { position: 2, nom: 'Helium', quantite: 4.0026, unite: 'He' },
  { position: 3, nom: 'Lithium', quantite: 6.941, unite: 'Li' },
  { position: 4, nom: 'Beryllium', quantite: 9.0122, unite: 'Be' },

];
const etapes: Etapes[] = [
  { position: 1, nom: 'Hydrogen', description: 'H' },
  { position: 2, nom: 'Helium', description: 'He' },
  { position: 3, nom: 'Lithium', description: 'Li' },
  { position: 4, nom: 'Beryllium', description: 'Be' },

];
@Component({
  selector: 'app-detail-p',
  templateUrl: './detail-p.component.html',
  styleUrls: ['./detail-p.component.scss']
})
export class DetailPComponent implements OnInit {
  dataSource: MatTableDataSource<any>;

  ngOnInit(): void {
   
  }
  photo : string;
  unites:string[] = ['g','ml','portion']
  categories:string[] = ['entree','ml','portion']

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  //colonnes
  ingredientColumns: string[] = ['position', 'nom', 'quantité', 'unité'];
  sousRecetteColumns: string[] = ['position', 'nom', 'quantité', 'unité','voir'];
  etapeColumns: string[] = ['position', 'nom', 'description'];
  //tableaux dataSource
  ingredient_tab = ingredients;
  sousRecette_tab = sousRecettes;
  etape_tab = etapes;
  //formGroups
  ingredient: FormGroup;
  sousRecette: FormGroup;
  etape: FormGroup;
  //constructeur
  nomPlat = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  qte = new FormControl('', Validators.required);
  unite = new FormControl('', Validators.required);
  quantite = new FormControl('', Validators.required);

  
  _formBuilder: any;
  plat : any ;
  constructor(public dialogRef: MatDialogRef<DetailPComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any ,private detailpService : DetailPService) {
     
      this.detailpService.getDetail(this.payload).snapshotChanges().subscribe(action => {
        console.log(action.payload.val())
        this.plat= action.payload.val();
        this.dataSource = new MatTableDataSource(this.plat);
        console.log(this.plat);
        })
        }
     getDetail(){
      console.log(this.payload);
      const plat = this.detailpService.getDetail(this.payload)
        console.log(plat)
      
     }

    onNoClick(): void {
      this.dialogRef.close();
    }
  
}
