import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UBoissonService } from "./uBoisson.service";
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-uboisson',
  templateUrl: './uBoisson.component.html',
  styleUrls: ['./uBoisson.component.scss'],
})
export class UBoissonComponent implements OnInit {
  //photo : string;

  valider = false;
  boisson: any;
  constructor(
    public dialogRef: MatDialogRef<UBoissonComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, 
    private UBoissonService: UBoissonService, 
    private shareService: ShareService
  ) {
    console.log(payload.value)
    this.boisson = payload.value;
    this.boisson.libelle = payload.value.libelle;
    this.boisson.prix = payload.value.prix;
    this.boisson.code = payload.value.code;
    this.boisson.quantite = payload.value.quantite;

  
    payload.boisson.classes.forEach((item) => {
      if (item.key == payload.value.classe.key) {
        this.boisson.classe = item;
      }
    })
    payload.boisson.familles.forEach((item) => {
      if (item.key == payload.value.famille.key) {
        this.boisson.famille = item;
      }
    })
    payload.boisson.sfamilles.forEach((item) => {
      if (item.key == payload.value.sfamille.key) {
        this.boisson.sfamille = item;
      }
    })
    payload.boisson.stockages.forEach((item) => {
      if (item.key == payload.value.stockage.key) {
        this.boisson.stockage = item;
      }
    })
    payload.boisson.achats.forEach((item) => {
      if (item.key == payload.value.achat.key) {
        this.boisson.achat = item;
      }
    })
  }

  ngOnInit() {
    console.log(this.payload.value)
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  EditBoisson() {
   

    this.valider = true;
    const obj = {
      libelle: this.boisson.libelle,
      prix: this.boisson.prix,
      code: this.boisson.code,
      quantite:this.boisson.quantite,
      
      classe: {
        key: this.boisson.classe.key,
        nomclasse: this.boisson.classe.payload.val().nomclasse
      }
      ,
      famille: {
        key: this.boisson.famille.key,
        nomfamille: this.boisson.famille.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.boisson.sfamille.key,
        nomsfamille: this.boisson.sfamille.payload.val().nomsfamille
      },
      stockage: {
        key: this.boisson.stockage.key,
        nom: this.boisson.stockage.payload.val().nom
      }
      ,
      achat: {
        key: this.boisson.achat.key,
        nom: this.boisson.achat.payload.val().nom
      }
      ,

    };
    console.log(obj)
    this.UBoissonService
      .updateBoisson(obj, this.payload.key)
      .then(() => {
        this.shareService.showMsg("boisson modifiée");
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




