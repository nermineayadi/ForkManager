import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UPlatService } from "./uplat.service";
import { Ingredients } from 'src/app/models/ingredients.model';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-cplat',
  templateUrl: './Uplat.component.html',
  styleUrls: ['./Uplat.component.scss'],
})
export class UplatComponent implements OnInit {
  //photo : string;

  ingredients: any[] = [
    { libelle: '', quantite: '', unite: '', key: '' }
  ];
  srecettes: any[] = [
    { nom: '', quantite: '', unite: '' }
  ];
  etapes: any[] = [
    { num: '', etape: '', desc: '' }
  ]
  unites: string[] = ['g', 'ml', 'portion']
  valider = false;
  ing: Ingredients[] = []

  plat: any;
  constructor(
    public dialogRef: MatDialogRef<UplatComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, 
    private UPlatService: UPlatService, 
    private shareService: ShareService
  ) {
    console.log(payload.value)
    this.plat = payload.value;
    this.plat.nomPlat = payload.value.nomPlat;
    this.plat.nbPart = payload.value.nbPart;
    this.plat.duree = payload.value.duree;
    if (this.plat.hasOwnProperty("ingredient")) {

    payload.plat.ingredients.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle })
    })
    console.log(this.ing);
  }
    payload.plat.categories.forEach((item) => {
      if (item.key == payload.value.categorie.key) {
        this.plat.categorie = item;
      }
    })
    payload.plat.familles.forEach((item) => {
      if (item.key == payload.value.famille.key) {
        this.plat.famille = item;
      }
    })
    payload.plat.sfamilles.forEach((item) => {
      if (item.key == payload.value.sfamille.key) {
        this.plat.sfamille = item;
      }
    })


    // this.plat.categorie = payload.value.categorie.key;
  }

  ngOnInit() {
    console.log(this.payload.value)
  }
  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0, unite: '', key: '' })
  }
  addNewSrecette() {
    this.srecettes.push({ nom: '', quantite: 0, unite: '' })
  }
  addNewEtape() {
    this.etapes.push({ numeo: '', etape: '' })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  EditPlat() {
    const ingredient: any[] = []
    if (this.plat.hasOwnProperty("ingredient")) {
      this.plat.ingredient.forEach((item) => {
        console.log(item)
        ingredient.push(item)
      })
    }
    console.log(ingredient)

    this.ingredients.forEach((item) => {
      console.log(item)
      if (ingredient.length > 0) {
        ingredient.forEach(element => {
          console.log(element.key)
          console.log(item.libelle.key)
          if (element.key == item.libelle.key) {
            element.quantite=item.quantite
            element.unite=item.unite
          } 
          else
          {
            ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

          }

        });}
        else
        ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

      })
    console.log(ingredient)

    this.valider = true;
    const obj = {
      nomPlat: this.plat.nomPlat,
      nbPart: this.plat.nbPart,
      duree: this.plat.duree,
      valide: true,
      categorie: {
        key: this.plat.categorie.key,
        nomcategorie: this.plat.categorie.payload.val().nomcategorie
      }
      ,
      famille: {
        key: this.plat.famille.key,
        nomfamille: this.plat.famille.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.plat.sfamille.key,
        nomsfamille: this.plat.sfamille.payload.val().nomsfamille
      }
      ,
      ingredient: ingredient
      // srecette: this.srecettes,
      // etape:this.etapes,
    };
    console.log(obj)
    this.UPlatService
      .updatePlat(obj, this.payload.key)
      .then(() => {
        this.shareService.showMsg("plat modifié");
        this.valider = false;
        this.shareService.sendNotification({
          title: 'validation',
          body: 'Plat validé',
          to: this.payload.value.token
        }).subscribe(() => {
          console.log('notification envoyée avec succes')
        })
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });
    this.dialogRef.close();
  }

}




