import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Ingredient } from 'src/app/models/ingredient.model';
import { UPlatService } from '../UPlat/uplat.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-detail-p',
  templateUrl: './detail-p.component.html',
  styleUrls: ['./detail-p.component.scss']
})
export class DetailPComponent implements OnInit {
  ngOnInit(): void {

  }
  photo: string;

  //colonnes
  ingredientColumns: string[] = ['libelle','prix', 'quantite', 'unité','supprimer'];
  sousRecetteColumns: string[] = ['libelle', 'quantité', 'unité'];
ingredient:any[]=[]
  plat: any;
  constructor(public dialogRef: MatDialogRef<DetailPComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
    private UPlatService :UPlatService,
    private shareService:ShareService) {
            this.plat= payload;
            if (this.plat.hasOwnProperty("ingredient")) {
              this.plat.ingredient.forEach((item) => {
                this.ingredient.push(item)
              })
            }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

update(ing,e){
  console.log(ing);
  console.log(e);
  this.ingredient.forEach((element:any) => {
    if(element.key==ing) {
      element.quantite=Number(e)
   
    console.log(element) } 
  })
  console.log(this.ingredient);
}
delete(ing : any){
  const index = this.ingredient.indexOf(ing, 0);
if (index > -1) {
  console.log(true)
  this.ingredient.splice(index, 1);
}
console.log(this.ingredient)
}
EditPlat(){
  this.UPlatService
  .updateIngPlat(this.ingredient, this.plat.key)
  .then(() => {
    const profile = JSON.parse(localStorage.getItem('profile'))
    this.shareService.showMsg("plat modifié");
    this.shareService.sendNotification({
      title: 'validation Plat',
      body : this.plat.nomPlat,
      icon : profile.avatar,
      to: this.payload.token
    }).subscribe(() => {
      console.log('notification envoyée avec succes')
    })
  })
  .catch(error => {
    console.error(error.message);
    this.shareService.showMsg(error.message);

  });
this.dialogRef.close();
}
}
