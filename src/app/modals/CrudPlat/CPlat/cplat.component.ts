import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CPlatService } from "./cplat.service";
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-cplat',
  templateUrl: './cplat.component.html',
  styleUrls: ['./cplat.component.scss'],
})
export class CplatComponent implements OnInit {
  //photo : string;
  
  ingredients: any[] = [
    {nom: '', quantite: 0 , unite: '' }
  ];
  recettes: any[] = [
    {nom: '', quantite: 0 , unite: '' }
  ];
  unites:string[] = ['g','ml','portion']

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  //colonnes
  ingredientColumns: string[] = ['position', 'nom', 'quantité', 'unité'];
  sousRecetteColumns: string[] = ['position', 'nom', 'quantité', 'unité','voir'];
  etapeColumns: string[] = ['position', 'nom', 'description'];

  valider= false ;
  plat  = new Plat() ;
   //informations necessaires 
  nomPlat = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  
 
  constructor(private _formBuilder: FormBuilder,
     public dialogRef: MatDialogRef<CplatComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , private  CPlatservice: CPlatService
     ) { }

  ngOnInit() {
    //console.log(this.payload);

  }
  addNew(){  
    this.ingredients.push({nom: '', quantite: 0 , unite: '' })
   // console.log(this.ingredients)
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
      ingredients: this.ingredients ,
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
    this.dialogRef.close();
}

}




