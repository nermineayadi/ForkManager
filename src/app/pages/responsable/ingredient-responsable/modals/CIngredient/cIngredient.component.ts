import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  Validators, FormControl } from '@angular/forms';
import { CIngredientService } from "./cIngredient.service";
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-cingredient',
  templateUrl: './cingredient.component.html',
  styleUrls: ['./cingredient.component.scss'],
})
export class CIngredientComponent implements OnInit {



  valider= false ;
  ingredient: any;
   //informations necessaires 
   libelle = new FormControl('', Validators.required);
   prix = new FormControl('', Validators.required);
   classe = new FormControl('', Validators.required);
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  code = new FormControl('', Validators.required);
  quantite = new FormControl('', Validators.required);
  stockage = new FormControl('', Validators.required);
  achat = new FormControl('', Validators.required);

 
  constructor(
     public dialogRef: MatDialogRef<CIngredientComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  Cingredientservice: CIngredientService
     ,private shareService : ShareService

     ) { 
      console.log(payload.classes[0].payload.val());

      this.ingredient = this.payload;
       console.log(payload);

      }

  ngOnInit() {
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  

  ajoutingredient() {

    this.valider=true;
    const obj = {
      valide: true,

      libelle: this.libelle.value,
      prix: this.prix.value,
      code: this.code.value,
      quantite: this.quantite.value,

      classe: {
        key: this.classe.value.key,
        nom: this.classe.value.payload.val().nomclasse
      }
      ,
      famille: {
        key: this.famille.value.key,
        nom: this.famille.value.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.sfamille.value.key,
        nom: this.sfamille.value.payload.val().nomsfamille
      }
      ,
      achat: {
        key: this.achat.value.key,
        nom: this.achat.value.payload.val().nom
      }
      ,
      stockage: {
        key: this.stockage.value.key,
        nom: this.stockage.value.payload.val().nom
      }

    };
    //console.log(obj)
     this.Cingredientservice
    .ajoutIngredient(obj)
    .then(() => {
      this.shareService.showMsg("ingredient ajouté");
      this.valider= false;
    })
    .catch(error => {
      console.error(error.message);
      this.shareService.showMsg(error.message);
      this.valider= false;

    });
    this.dialogRef.close();
}

}




