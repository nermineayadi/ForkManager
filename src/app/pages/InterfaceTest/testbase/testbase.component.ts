import { Component, OnInit, Inject } from '@angular/core';
import {  MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
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
  selector: 'app-testbase',
  templateUrl: './testbase.component.html',
  styleUrls: ['./testbase.component.sass']
})
export class TestbaseComponent implements OnInit {

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
valider: false ;
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  shareService: any;
  constructor(private _formBuilder: FormBuilder,
     
     @Inject(MAT_DIALOG_DATA) public payload: any) { }

  ngOnInit() {
    console.log(this.payload);

    this.ingredient = this._formBuilder.group({
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });

  }
  onchange(evt){
 // const file = event.target.files[0]
}
  

}