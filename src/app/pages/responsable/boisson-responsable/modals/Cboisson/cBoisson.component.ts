import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  Validators, FormControl } from '@angular/forms';
import { CBoissonService } from "./cBoisson.service";
import { Plat } from 'src/app/models/plat.model';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-cBoisson',
  templateUrl: './cBoisson.component.html',
  styleUrls: ['./cBoisson.component.scss'],
})
export class CBoissonComponent implements OnInit {



  valider= false ;
  boisson: any;
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
     public dialogRef: MatDialogRef<CBoissonComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  CBoissonservice: CBoissonService
     ,private shareService : ShareService

     ) { 
      console.log(payload.classes[0].payload.val());

      this.boisson = this.payload;
       console.log(payload);

      }

  ngOnInit() {
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }

  

  ajoutBoisson() {

    this.valider=true;
    const obj = {
      valide: true,

      libelle: this.libelle.value,
      prix: this.prix.value,
      code: this.code.value,
      quantite: this.quantite.value,

      classe: {
        key: this.classe.value.key,
        nomclasse: this.classe.value.payload.val().nomclasse
      }
      ,
      famille: {
        key: this.famille.value.key,
        nomfamille: this.famille.value.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.sfamille.value.key,
        nomsfamille: this.sfamille.value.payload.val().nomsfamille
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
      ,

    };
    console.log(obj)
     this.CBoissonservice
    .ajoutBoisson(obj)
    .then(() => {
      this.shareService.showMsg("Boisson ajoutée");
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




