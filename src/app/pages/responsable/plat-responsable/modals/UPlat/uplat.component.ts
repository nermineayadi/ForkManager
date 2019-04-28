import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UPlatService } from "./uplat.service";

@Component({
  selector: 'app-cplat',
  templateUrl: './Uplat.component.html',
  styleUrls: ['./Uplat.component.scss'],
})
export class UplatComponent implements OnInit {
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
  
   plat:any;
  constructor(
     public dialogRef: MatDialogRef<UplatComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , private  UPlatService: UPlatService
     ) { 
       console.log(payload)
            this.plat= payload;
            payload.plat.categories.forEach((item)=>{
              if (item.key==payload.value.categorie.key){
                this.plat.categorie=item;
              }
            })
            // this.plat.categorie = payload.value.categorie.key;
     }

  ngOnInit() {

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

  EditPlat() {
    this.plat.ingredient = this.ingredients;
    console.log(this.plat);
    this.valider=true;
    // const obj = {
    //   nomPlat : this.nomPlat.value,
    //   categorie : this.category.value,
    //   famille : this.famille.value,
    //   sfamille : this.famille.value,
    //   ingredients: this.ingredients ,
    //   srecettes: this.srecettes,
    //   etapes:this.etapes,
    //   nbPart : this.nbparts.value,
    //   duree : this.duree.value
    // };
    // console.log(obj)
     this.UPlatService
    .updatePlat(this.plat,this.payload.key)
    .then(() => {
      this.UPlatService.showMsg("plat modifié");
      this.valider= false;
    })
    .catch(error => {
      console.error(error.message);
      this.UPlatService.showMsg(error.message);
      this.valider= false;

    });
    this.dialogRef.close();
}

}




