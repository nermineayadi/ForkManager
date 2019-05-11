import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UIngredientService } from "./uIngredient.service";
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-uingredient',
  templateUrl: './uingredient.component.html',
  styleUrls: ['./uingredient.component.scss'],
})
export class UIngredientComponent implements OnInit {
  //photo : string;

  valider = false;
  ingredient: any;
  constructor(
    public dialogRef: MatDialogRef<UIngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, 
    private UingredientService: UIngredientService, 
    private shareService: ShareService
  ) {
    console.log(payload.value)
    this.ingredient = payload.value;
    this.ingredient.libelle = payload.value.libelle;
    this.ingredient.prix = payload.value.prix;
    this.ingredient.code = payload.value.code;
    this.ingredient.quantite = payload.value.quantite;

  
    payload.ingredient.classes.forEach((item) => {
      if (item.key == payload.value.classe.key) {
        this.ingredient.classe = item;
      }
    })
    payload.ingredient.familles.forEach((item) => {
      if (item.key == payload.value.famille.key) {
        this.ingredient.famille = item;
      }
    })
    payload.ingredient.sfamilles.forEach((item) => {
      if (item.key == payload.value.sfamille.key) {
        this.ingredient.sfamille = item;
      }
    })
    payload.ingredient.stockages.forEach((item) => {
      if (item.key == payload.value.stockage.key) {
        this.ingredient.stockage = item;
      }
    })
    payload.ingredient.achats.forEach((item) => {
      if (item.key == payload.value.achat.key) {
        this.ingredient.achat = item;
      }
    })
  }

  ngOnInit() {
    console.log(this.payload.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  EditIngredient() {
   

    this.valider = true;
    const obj = {
      libelle: this.ingredient.libelle,
      prix: this.ingredient.prix,
      code: this.ingredient.code,
      quantite:this.ingredient.quantite,
      
      classe: {
        key: this.ingredient.classe.key,
        nom: this.ingredient.classe.payload.val().nomclasse
      }
      ,
      famille: {
        key: this.ingredient.famille.key,
        nom: this.ingredient.famille.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.ingredient.sfamille.key,
        nom: this.ingredient.sfamille.payload.val().nomsfamille
      },
      stockage: {
        key: this.ingredient.stockage.key,
        nom: this.ingredient.stockage.payload.val().nom
      }
      ,
      achat: {
        key: this.ingredient.achat.key,
        nom: this.ingredient.achat.payload.val().nom
      }
      ,

    };
    console.log(obj)
    this.UingredientService
      .updateIngredient(obj, this.payload.key)
      .then(() => {
        this.shareService.showMsg("ingredient modifié");
        this.valider = false;
        
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });
    this.dialogRef.close();
  }

}




