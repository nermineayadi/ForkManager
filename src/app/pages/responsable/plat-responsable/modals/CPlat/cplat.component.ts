import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  Validators, FormControl } from '@angular/forms';
import { CPlatService } from "./cplat.service";
import { ShareService } from 'src/app/services/share.service';
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-cplat',
  templateUrl: './cplat.component.html',
  styleUrls: ['./cplat.component.scss'],
})
export class CplatComponent implements OnInit {
   //photo : string;
  
   ingredients: any[] = [
    {libelle: '', quantite: '' , unite: '' }
  ];
  srecettes: any[] = [
    {libelle: '', quantite: '' , unite: '' }
  ];

  unites:string[] = ['g','ml','portion']


  valider= false ;
  plat  = new Plat() ;
   //informations necessaires 
  nomPlat = new FormControl('', Validators.required);
  category = new FormControl('', Validators.required);
  famille = new FormControl('', Validators.required);
  sfamille = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  
 
  constructor(
     public dialogRef: MatDialogRef<CplatComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  CPlatservice: CPlatService
     ,private shareService : ShareService

     ) { }

  ngOnInit() {
    //console.log(this.payload);

  }
  addNewIngredient(){  
    this.ingredients.push({libelle: '', quantite: 0 , unite: '' }) 
   }
    addNewSrecette(){  
      this.srecettes.push({libelle: '', quantite: 0 , unite: '' }) 
     }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get isValid():boolean{
    return this.nomPlat.invalid || this.category.invalid || this.famille.invalid 
    || this.sfamille.invalid || this.nbparts.invalid || this.duree.invalid; 
}

  ajoutPlat() {
    const ingredient: any[] = []
 console.log(this.ingredients)
    this.ingredients.forEach((item) => {
      console.log(item)
      if(item.libelle.hasOwnProperty("key")){
      ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })}})

      const srecette: any[] = []
      console.log(this.srecettes)
         this.srecettes.forEach((item) => {
           console.log(item)
           if(item.libelle.hasOwnProperty("key")){
            srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })}})
    this.valider=true;
    const obj = {
      token: JSON.parse(localStorage.getItem('profile')).token,
      nomPlat : this.nomPlat.value,
      categorie : {
        key: this.category.value.key,
        nomcategorie: this.category.value.payload.val().nomcategorie
      },
      famille : {
        key: this.famille.value.key,
        nomfamille: this.famille.value.payload.val().nomfamille
      },
      sfamille : {
        key: this.sfamille.value.key,
        nomsfamille: this.sfamille.value.payload.val().nomsfamille
      },
      ingredients: ingredient ,
      srecettes: srecette,
      nbPart : this.nbparts.value,
      duree : this.duree.value
    };
    console.log(obj)
     this.CPlatservice
    .ajoutPlat(obj)
    .then((data: any) => {
      this.shareService.showMsg("plat ajouté");
      this.valider= false;
      this.dialogRef.close({
        key: data.key,
        ...obj
      });
    })
    .catch(error => {
      console.error(error.message);
      this.shareService.showMsg(error.message);
      this.valider= false;

    });
    
}

}




