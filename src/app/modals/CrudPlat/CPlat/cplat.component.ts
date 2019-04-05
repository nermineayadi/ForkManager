import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-cplat',
  templateUrl: './cplat.component.html',
  styleUrls: ['./cplat.component.scss'],
})
export class CplatComponent implements OnInit {
  photo : string;
  unites:string[] = ['g','ml','portion']
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
  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<CplatComponent>) { }

  ngOnInit() {
    this.ingredient = this._formBuilder.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
    this.sousRecette = this._formBuilder.group({
      nom: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
    this.etape = this._formBuilder.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
    });
  }
  onchange(evt){
 // const file = event.target.files[0]
}
  onNoClick(): void {
    this.dialogRef.close();
  }

}




