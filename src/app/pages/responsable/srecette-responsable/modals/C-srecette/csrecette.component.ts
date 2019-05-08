import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {  Validators, FormControl } from '@angular/forms';
import { CSrecetteService } from "./csrecette.service";
import { ShareService } from 'src/app/services/share.service';
import { Srecette } from 'src/app/models/srecette.model';

@Component({
  selector: 'app-csrecette',
  templateUrl: './csrecette.component.html',
  styleUrls: ['./csrecette.component.scss'],
})
export class CSrecetteComponent implements OnInit {
   //photo : string;
  
   ingredients: any[] = [
    {nom: '', quantite: '' , unite: '' }
  ];
  srecettes: any[] = [
    {nom: '', quantite: '' , unite: '' }
  ];
  etapes:any[]=[
    {num:'', etape : ''}
  ]
  unites:string[] = ['g','ml','portion']


  valider= false ;
  srecette  = new Srecette() ;
   //informations necessaires 
  nomsrecette = new FormControl('', Validators.required);
  nbparts = new FormControl('', Validators.required);
  duree = new FormControl('', Validators.required);
  
 
  constructor(
     public dialogRef: MatDialogRef<CSrecetteComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  csrecetteservice: CSrecetteService
     ,private shareService : ShareService

     ) { }

  ngOnInit() {
    //console.log(this.payload);

  }
  addNewIngredient(){  
    this.ingredients.push({nom: '', quantite: 0 , unite: '' }) 
   }
    addNewSrecette(){  
      this.srecettes.push({nom: '', quantite: 0 , unite: '' }) 
     }
      addNewEtape(){
        this.etapes.push({numeo :'',etape:''})
      }
  onNoClick(): void {
    this.dialogRef.close();
  }

  get isValid():boolean{
    return this.nomsrecette.invalid  || this.nbparts.invalid || this.duree.invalid; 
}

  ajoutsrecette() {

    this.valider=true;
    const obj = {
      token: JSON.parse(localStorage.getItem('profile')).token,
      nomsrecette : this.nomsrecette.value,
      ingredients: this.ingredients ,
      srecettes: this.srecettes,
      etapes:this.etapes,
      nbPart : this.nbparts.value,
      duree : this.duree.value
    };
    console.log(obj)
     this.csrecetteservice
    .ajoutSrecette(obj)
    .then((data: any) => {
      this.shareService.showMsg("srecette ajouté");
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




