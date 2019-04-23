import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { CPlatService } from "./cplat.service";
import { Plat } from 'src/app/models/plat.model';

@Component({
  selector: 'app-cplat',
  templateUrl: './cplat.component.html',
  styleUrls: ['./cplat.component.scss'],
})
export class CplatComponent implements OnInit {
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
     @Inject(MAT_DIALOG_DATA) public payload: any , private  CPlatservice: CPlatService
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
    return this.nomPlat.invalid || this.category.invalid || this.famille.invalid 
    || this.sfamille.invalid || this.nbparts.invalid || this.duree.invalid; 
}

  ajoutPlat() {

    this.valider=true;
    const obj = {
      nomPlat : this.nomPlat.value,
      categorie : {
        key: this.category.value.key,
        name: this.category.value.payload.val().name
      },
      famille : {
        key: this.famille.value.key,
        name: this.famille.value.payload.val().name
      },
      sfamille : {
        key: this.sfamille.value.key,
        name: this.sfamille.value.payload.val().name
      },
      ingredients: this.ingredients ,
      srecettes: this.srecettes,
      etapes:this.etapes,
      nbPart : this.nbparts.value,
      duree : this.duree.value
    };
    console.log(obj)
     this.CPlatservice
    .ajoutPlat(obj)
    .then(() => {
      this.CPlatservice.showMsg("plat ajouté");
      this.valider= false;
    })
    .catch(error => {
      console.error(error.message);
      this.CPlatservice.showMsg(error.message);
      this.valider= false;

    });
    this.dialogRef.close();
}

}




