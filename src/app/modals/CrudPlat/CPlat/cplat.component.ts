import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CPlatService } from "./cplat.service";
import { Plat } from 'src/app/models/plat.model';
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
  //constructeur
  valider= false ;
  plat  = new Plat() ;
  nomPlat = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  qte = new FormControl('', Validators.required);
  unite = new FormControl('', Validators.required);
  quantite = new FormControl('', Validators.required);
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  constructor(private _formBuilder: FormBuilder,
     public dialogRef: MatDialogRef<CplatComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , private  CPlatservice: CPlatService
     ) { }

  ngOnInit() {
    console.log(this.payload);

  }
  onchange(evt){
 // const file = event.target.files[0]
}
  onNoClick(): void {
    this.dialogRef.close();
  }
  get isValid():boolean{
    return this.nomPlat.invalid || this.category.invalid || this.famille.invalid 
    || this.sfamille.invalid || this.nbparts.invalid || this.duree.invalid; 
}

  ajoutPlat() {

    this.valider=true;
    const obj = {
      nomPlat : this.nomPlat.value,
      categorie : this.category.value,
      famille : this.famille.value,
      sfamille : this.sfamille.value,
      nbPart : this.nbparts.value,
      duree : this.duree.value
    };
    this.plat = obj ;
    this.CPlatservice
    .ajoutPlat(this.plat)
    .then((data: any) => {
      this.CPlatservice.showMsg("plat ajouté");
      console.log(data);
      //localStorage.setItem("uid", data.user.uid);
      this.valider= false;
    })
    .catch(error => {
      console.error(error.message);
      this.CPlatservice.showMsg(error.message);
      this.valider= false;

    });
}

}




