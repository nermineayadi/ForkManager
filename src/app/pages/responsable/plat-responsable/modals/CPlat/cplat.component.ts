import { Component, OnInit, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Validators, FormControl } from '@angular/forms';
import { CPlatService } from "./cplat.service";
import { ShareService } from 'src/app/services/share.service';
import { Plat } from 'src/app/models/plat.model';
import { Ingredients } from 'src/app/models/ingredients.model';
import { SRecettes } from 'src/app/models/srecettes.model';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-cplat',
  templateUrl: './cplat.component.html',
  styleUrls: ['./cplat.component.scss'],
})
export class CplatComponent implements OnInit {
  //photo : string;

  ingredients: any[] = [
    { libelle: '', quantite: '', unite: '' }
  ];
  srecettes: any[] = [
    { libelle: '', quantite: '', unite: '' }
  ];

  unites: string[] = ['g', 'ml', 'portion']


  valider = false;
  plat = new Plat();
  //informations necessaires 
  nomPlat = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  prix = new FormControl(0, Validators.required);
  cout: any

  ing: Ingredients[] = []
  srec: SRecettes[] = []
  event: any;
  constructor(
    public dialogRef: MatDialogRef<CplatComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
    private CPlatservice: CPlatService
    , private shareService: ShareService

  ) {
    payload.ingredients.forEach((item) => {
      //   console.log(item.payload.val().stockage.nom)
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle, unite: item.payload.val().stockage, prix: item.payload.val().prix })
    })
    console.log(this.ing);
    payload.srecettes.forEach((item) => {
      this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
    })
    console.log(this.srec);
  }

  ngOnInit() {
    //console.log(this.payload);

  }
  @ViewChildren('I') I;
  onSelection(e) {
    this.event = e
    console.log(e.value);
  }
  get selectedIngredient() {
    return this.event ? this.event.value.unite.nom : '';
  }
  get coutIngredient() {
    var cout: number = 0
    this.ingredients.forEach(element => {
      cout += element.libelle.prix * element.quantite
    });

    return cout > 0 ? cout.toFixed(3) : 0;
  }
  get PourcentCout() {
    var prc: number = Number(this.coutIngredient) * 100 / this.prix.value
    return prc > 0 ? Math.round(prc) : 0
  }
  get Marge() {
    var marge: number = 0;
    marge = ((this.prix.value - Number(this.coutIngredient)) / Number(this.coutIngredient)) * 10
    return marge > 0 ? Math.round(marge) : 0;
  }
  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0})
  }
  addNewSrecette() {
    this.srecettes.push({ libelle: '', quantite: 0, unite: '' })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get isValid(): boolean {
    return this.nomPlat.invalid || this.category.invalid || this.famille.invalid
      || this.sfamille.invalid || this.duree.invalid || this.prix.invalid;
  }
   usedIng (key: string ): number {
     var i : number
    this.payload.ingredients.forEach((data)=>{
      if(data.key==key){

      
       i = data.payload.val().used
      console.log(i) 
      if (i) {
      i++
      console.log(true)
    }
    else {
      i = 1
      console.log(false)
    }}})
    return i ;
  }

  ajoutPlat() {
    const ingredient: any[] = []
    console.log(this.ingredients)
    this.ingredients.forEach((item) => {
      console.log(item)
      if (item.libelle.hasOwnProperty("key")) {
        var used: number = 0
        var i: number
        ingredient.push({ ...item.libelle, quantite: Number(item.quantite) })
        i= this.usedIng(item.libelle.key)
        this.shareService.updateIngredient(item.libelle.key,i)
      }
    })

    const srecette: any[] = []
    console.log(this.srecettes)
    this.srecettes.forEach((item) => {
      console.log(item)
      if (item.libelle.hasOwnProperty("key")) {
        srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })
      }
    })
    this.valider = true;
    console.log(ingredient)

    const obj = {
      token: JSON.parse(localStorage.getItem('profile')).token,
      nomPlat: this.nomPlat.value,
      categorie: {
        key: this.category.value.key,
        nomcategorie: this.category.value.payload.val().nomcategorie
      },
      famille: {
        key: this.famille.value.key,
        nomfamille: this.famille.value.payload.val().nomfamille
      },
      sfamille: {
        key: this.sfamille.value.key,
        nomsfamille: this.sfamille.value.payload.val().nomsfamille
      },
      ingredient: ingredient,
      srecette: srecette,
      duree: Number(this.duree.value),
      prix: Number(this.prix.value),
      cout: this.coutIngredient,
      nbVentes: 0,
      valide: true
    };
    console.log(obj)
    this.CPlatservice
      .ajoutPlat(obj)
      .then((data: any) => {
        this.shareService.showMsg("plat ajouté");
        this.valider = false;
        this.dialogRef.close({
          key: data.key,
          ...obj
        });
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });

  }

}




