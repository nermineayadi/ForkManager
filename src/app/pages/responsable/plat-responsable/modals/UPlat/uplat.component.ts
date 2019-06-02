import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UPlatService } from "./uplat.service";
import { ShareService } from 'src/app/services/share.service';
import { SRecettes } from 'src/app/models/srecettes.model';
import { Ingredients } from 'src/app/models/ingredients.model';
import { count } from 'rxjs/operators';

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
    { libelle: '', quantite: '', unite: '' ,key:''}
  ];
  
  unites: string[] = ['g', 'ml', 'portion']
  valider = false;
  ing: Ingredients[] = []
  srec: SRecettes[] = []

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
    this.plat.duree = Number(payload.value.duree);
    this.plat.prix = Number(payload.value.prix);
   this.plat.cout=this.coutPlat;

    payload.plat.ingredients.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle ,unite: item.payload.val().stockage,prix : item.payload.val().prix})
    })
    console.log(this.ing);
    payload.plat.srecettes.forEach((item) => {
      this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
    })
    console.log(this.srec);
  
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
    // payload.value.ingredient.forEach((element)=>{
    //   this.plat.cout+=element.libelle.prix*element.quantite

    // })


    //  this.plat.categorie = payload.value.categorie.key;
  }
  get coutPlat(){
    var cout = 0 ;
     this.payload.value.ingredient.forEach((element)=>{
     cout+=element.libelle.prix*element.quantite
    })
      return cout;
  }
  get coutIngredient(){
    var cout=this.plat.cout
    console.log(cout)
    this.ingredients.forEach(element => {
if(element.libelle.hasOwnProperty("key")){
      cout+=element.libelle.prix*element.quantite}
    });
 
    return cout>0 ? cout.toFixed(3) : 0;
  }
  get PourcentCout(){
    var prc : number = Number( this.coutIngredient)*100/this.plat.prix
    console.log(prc)
    return prc>0 ? Math.round(prc) : 0
  }
  get Marge(){
    var marge : number=0;
    marge = ((this.plat.prix-Number(this.coutIngredient))/Number(this.coutIngredient))*10
    console.log(marge)
    return marge>0 ? Math.round(marge): 0;
  }
  ngOnInit() {
    console.log(this.payload.value)
  }
  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0, unite: '', key: '' })
  }
  addNewSrecette() {
    this.srecettes.push({ libelle: '', quantite: 0, unite: '' })
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  EditPlat() {
    var test ;
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
      if(item.libelle.hasOwnProperty("key")){
      if (ingredient.length > 0) {
        ingredient.forEach(element => {
          console.log(element.key)
          console.log(item.libelle.key)
          if (element.key == item.libelle.key) {
            // element.quantite=item.quantite
            // element.unite=item.unite
            this.shareService.showMsg('ingrédient déjà existant')
            test=false
          } 
          else
          {
            ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

          }

        });}
        else
        ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

      }})
    console.log(ingredient)
    const srecette: any[] = []
    if (this.plat.hasOwnProperty("srecette")) {
      this.plat.srecette.forEach((item) => {
      
        console.log(item)
        srecette.push(item)
      })
    }
    console.log(srecette)

    this.srecettes.forEach((item) => {
      console.log(item)
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

        });}
        else
        srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })

      }})
    console.log(srecette)
    this.valider = true;
    const obj = {
      nomPlat: this.plat.nomPlat,
      prix:this.plat.prix,
      duree: this.plat.duree,
      //prix: this.plat.prix,
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
      ingredient: ingredient,
      srecette: srecette,
      // etape:this.etapes,
    };
    console.log(obj)
    if(test==true){
    this.UPlatService
      .updatePlat(obj, this.payload.key)
      .then(() => {
        const profile = JSON.parse(localStorage.getItem('profile'))
        this.shareService.showMsg("plat modifié");
        this.valider = false;
        this.shareService.sendNotification({
          title: 'validation Plat',
          // body: {img:profile.avatar,nom :this.plat.nomPlat},
          body : this.plat.nomPlat,
          icon : profile.avatar,
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

}




