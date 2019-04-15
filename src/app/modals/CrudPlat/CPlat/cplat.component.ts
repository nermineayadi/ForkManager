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
  ingredients: any[] = [
    {nom: '', quantite: 0 , unite: '' }
  ];
  unites:string[] = ['g','ml','portion']
  categories:string[] = ['entree','ml','portion']

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  //colonnes
  ingredientColumns: string[] = ['position', 'nom', 'quantité', 'unité'];
  sousRecetteColumns: string[] = ['position', 'nom', 'quantité', 'unité','voir'];
  etapeColumns: string[] = ['position', 'nom', 'description'];
  //tableaux dataSource
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
  addNew(){
    
    this.ingredients.push({nom: '', quantite: 0 , unite: '' })
    console.log(this.ingredients)
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
      categorie : {
        key: this.category.value.key,
        name: this.category.value.payload.val().name
      },
      famille : {
        key: this.famille.value.key,
        name: this.famille.value.payload.val().name
      },
      sfamille : {
        key: this.sfamille.value.key,
        name: this.sfamille.value.payload.val().name
      },
      nbPart : this.nbparts.value,
      duree : this.duree.value
    };
    console.log(obj)
     this.CPlatservice
    .ajoutPlat(obj)
    .then(() => {
      this.CPlatservice.showMsg("plat ajouté");
      this.valider= false;
    })
    .catch(error => {
      console.error(error.message);
      this.CPlatservice.showMsg(error.message);
      this.valider= false;

    });
}

}




