import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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

  ingredientColumns: string[] = [ 'code', 'ingredient','quantite' ,'unite','pru', 'prt'];
  sousRecetteColumns: string[] =[ 'code', 'srecette','quantite'];
ingredients:any[]=[]
srecettes:any[]=[]

  plat: any;
  constructor(public dialogRef: MatDialogRef<DetailPComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
   ) {
            this.plat= payload;
            if (this.plat.hasOwnProperty("ingredient")) {
              this.plat.ingredient.forEach((item) => {
                this.ingredients.push(item)
              })}
              if (this.plat.hasOwnProperty("srecette")) {
                this.plat.ingredient.forEach((item) => {
                  this.srecettes.push(item)
                })
            }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  PrixUIng(element) : number{
    
    var prix : any ;
 this.ingredients.forEach((row)=>{
   if(row.key==element.key){
     console.log(row.prix)
     prix= row.prix
   }
 })
 return  prix>0 ? prix.toFixed(3) : 0;
 }
 PrixTIng(element , qte){
  var prix : any ;
  prix= this.PrixUIng(element)*qte
   return  prix>0 ? prix.toFixed(3) : 0;
 }
 get coutPlat(){
   var cout = 0 ;
    this.ingredients.forEach((element)=>{
    cout+=element.prix*element.quantite
   })
     return cout;
 }
 get coutIngredient(){
   var cout=this.plat.cout
   console.log(cout)
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




}
