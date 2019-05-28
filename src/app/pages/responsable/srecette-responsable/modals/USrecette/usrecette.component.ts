import { Component, OnInit, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { USrecetteService } from "./usrecette.service";
import { ShareService } from 'src/app/services/share.service';
import { Ingredients } from 'src/app/models/ingredients.model';
import { SRecettes } from 'src/app/models/srecettes.model';

@Component({
  selector: 'app-usrecette',
  templateUrl: './usrecette.component.html',
  styleUrls: ['./usrecette.component.scss'],
})
export class USrecetteComponent implements OnInit {
  //photo : string;

  ingredients: any[] = [
    { libelle: '', quantite: '', unite: ''}
  ];
  srecettes: any[] = [
    { libelle: '', quantite: '', unite: '' }
  ];

  unites: string[] = []
  valider = false;
  ing: Ingredients[] = []
  srec: SRecettes[] = []
  srecette: any;
  event: any;
  constructor(
    public dialogRef: MatDialogRef<USrecetteComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, 
    private srecetteService: USrecetteService, 
    private shareService: ShareService
  ) {
    console.log(payload.value)
    this.srecette = payload.value;
    this.srecette.nomsrecette = payload.value.nomsrecette;
    this.srecette.nbPart = payload.value.nbPart;
    this.srecette.duree = payload.value.duree;
    this.srecette.code = payload.value.code;


    payload.srecette.ingredients.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle ,unite: item.payload.val().stockage ,prix : item.payload.val().prix})
    })
    console.log(this.ing);


    payload.srecette.srecettes.forEach((item) => {
      this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
    })
    console.log(this.srec);

    payload.srecette.unites.forEach((item) => {
      this.unites.push(item.payload.val().nom)
    })
    console.log(this.unites);



    // this.srecette.categorie = payload.value.categorie.key;
  }

  ngOnInit() {
    console.log(this.payload.value)
  }
  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0, unite: ''})
  }
  addNewSrecette() {
    this.srecettes.push({ libelle: '', quantite: 0, unite: '' })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  @ViewChildren('I') I;
  onSelection(e) {
    this.event = e
    console.log(e.value);
  }
  get selectedIngredient() {
    return this.event ? this.event.value.unite.nom : '';
  }

  Editsrecette() {
    const ingredient: any[] = []
    const srecette:any[]=[]
    if (this.srecette.hasOwnProperty("ingredient")) {
      this.srecette.ingredient.forEach((item) => {
        console.log(item)
        ingredient.push(item)
      })
    }
    console.log(ingredient)

    this.ingredients.forEach((item) => {
      if(item.libelle.hasOwnProperty("key")){
      
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

        });
      }
        else
        ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })
}
else
console.log(item)
      })
    console.log(ingredient)

    
    if (this.srecette.hasOwnProperty("srecette")) {
      this.srecette.srecette.forEach((item) => {
        console.log(item)
        srecette.push(item)
      })
    }
    console.log(this.srecettes)

    this.srecettes.forEach((item) => {
      if(item.libelle.hasOwnProperty("key")){
      
      if (srecette.length > 0) {
        srecette.forEach(element => {
          console.log(element.key)
          console.log(item.libelle.key)
          if (element.key == item.libelle.key) {
            element.quantite=item.quantite
            element.unite=item.unite
          } 
          else
          {
            srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

          }

        });
      }
        else
        srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })
}
else
console.log(item)
      })
    console.log(srecette)

    this.valider = true;
    const obj = {
      code:this.srecette.code,
      nomsrecette: this.srecette.nomsrecette,
      nbPart: this.srecette.nbPart,
      duree: this.srecette.duree,      
      ingredient: ingredient,
       srecette: srecette,
    };
    console.log(obj)
    this.srecetteService
      .updateSrecette(obj, this.payload.key)
      .then(() => {
        this.shareService.showMsg("srecette modifiée");
        this.valider = false;
        // this.shareService.sendNotification({
        //   title: 'validation',
        //   body: 'srecette validée',
        //   to: this.payload.value.token
        // }).subscribe(() => {
        //   console.log('notification envoyée avec succes')
        // })
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });
    this.dialogRef.close();
  }

}




