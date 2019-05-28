import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  Validators, FormControl } from '@angular/forms';
import { CSrecetteService } from "./csrecette.service";
import { ShareService } from 'src/app/services/share.service';
import { Srecette } from 'src/app/models/srecette.model';
import { Ingredients } from 'src/app/models/ingredients.model';
import { SRecettes } from 'src/app/models/srecettes.model';

@Component({
  selector: 'app-csrecette',
  templateUrl: './csrecette.component.html',
  styleUrls: ['./csrecette.component.scss'],
})
export class CSrecetteComponent implements OnInit {

  ingredients: any[] = [
    { libelle: '', quantite: '', unite: '' }
  ];
  srecettes: any[] = [
    { libelle: '', quantite: '', unite: '' }
  ];
  ing: Ingredients[] = []
  srec: SRecettes[] = []

  unites:string[] =[]


  valider= false ;
  srecette  = new Srecette() ;
   //informations necessaires 
  nomSrecette = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  code = new FormControl('', Validators.required);

 
  constructor(
     public dialogRef: MatDialogRef<CSrecetteComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  csrecetteservice: CSrecetteService
     ,private shareService : ShareService

     ) {
       console.log(payload.ingredients)
      payload.ingredients.forEach((item) => {
        this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle ,unite: item.payload.val().stockage ,prix : item.payload.val().prix})
      })
      console.log(this.srec);

      payload.srecettes.forEach((item) => {
        this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
      })
      console.log(this.srec);

      payload.unites.forEach((item) => {
        this.unites.push(item.payload.val().nom)
      })
      console.log(this.unites);

      }

  ngOnInit() {
    //console.log(this.payload);

  }
  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0, unite: '' })
  }
  addNewSrecette() {
    this.srecettes.push({ libelle: '', quantite: 0, unite: '' })
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  get isValid():boolean{
    return this.nomSrecette.invalid  || this.nbparts.invalid || this.duree.invalid; 
}

  ajoutsrecette() {
    const ingredient: any[] = []
 console.log(this.ingredients)
    this.valider=true;
    this.ingredients.forEach((item) => {
      console.log(item)
      if(item.libelle.hasOwnProperty("key")){
      ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })}})

      const srecette: any[] = []
      console.log(this.srecettes)
         this.valider=true;
         this.srecettes.forEach((item) => {
           console.log(item)
           if(item.libelle.hasOwnProperty("key")){
            srecette.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })}})
    const obj = {
     
      nomsrecette : this.nomSrecette.value,
      ingredient: ingredient,
      srecette: srecette,
      nbPart : this.nbparts.value,
      duree : this.duree.value,    
      code : this.code.value


    };
    console.log(obj)
     this.csrecetteservice
    .ajoutSrecette(obj)
    .then((data: any) => {
      this.shareService.showMsg("srecette ajoutée");
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




