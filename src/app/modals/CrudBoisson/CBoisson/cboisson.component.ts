import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import { Boisson } from 'src/app/models/boisson.model';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cboisson',
  templateUrl: './cboisson.component.html',
 
})
export class CBoissonComponent implements OnInit {

  boisson = new Boisson();
  route: any;
  cboissonService: any;
  addNewBoisson() {
    console.log(this.boisson)
    const obj = {
      code : this.boisson.code,
      libelle : this.boisson.libelle, 
      quantite : this.boisson.quantite , 
      prix : this.boisson.prix, 
      classe : {
        key : this.boisson.classe.key, 
        nom : this.boisson.classe.payload.val().nomclasse
      },
      famille : {
        key : this.boisson.famille.key, 
        nom : this.boisson.famille.payload.val().nomfamille
      },
      sfamille: {
        key : this.boisson.sfamille.key, 
        nom : this.boisson.sfamille.payload.val().nomsfamille
      },
     achat : {
        key : this.boisson.achat.key, 
        nom : this.boisson.achat.payload.val().nom
      },
      stockage : {
        key : this.boisson.stockage.key, 
        nom : this.boisson.stockage.payload.val().nom
      },
    }
    this.cboissonService.addboisson(obj).then(() => {
      this.cboissonService.showMsg('boisson ajoutée')
    }).catch(error => {
      this.cboissonService.showMsg(error.message)
    })

  }
  unite: any =
    { nom: '' }
    ;
  constructor(public dialogRef: MatDialogRef<CBoissonComponent>) {}
  ngOnInit() {
    
   
  }
  classe: any =
  { numclasse: 0, nomclasse: '' }
addNewClasse() {
  this.cboissonService.addclasse(this.classe).then(() => {
    this.cboissonService.showMsg('classe ajoutée')
  }).catch(error => {
    this.cboissonService.showMsg(error.message)
  })
  this.classe = { numclasse: 0, nomclasse: '' }

}
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    

}
