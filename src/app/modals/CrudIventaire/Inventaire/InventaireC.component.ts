import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { InventaireCService } from './InventaireC.service';
import { Ingredients } from 'src/app/models/ingredients.model';
@Component({
    selector: 'app-InventaireC',
    templateUrl: './InventaireC.component.html',
    styleUrls: ['./InventaireC.component.scss']
})
export class InventaireCComponent  {
  resp: any
  date = new Date().toLocaleDateString();
  unites: string[] = ['g', 'ml', 'portion']
  ingredients: any[] = [
    {libelle: '', quantite: '' , unite: '' }
  ];
  valider= false ;
  ing: Ingredients[] = []
inventaire : any
    
  constructor(
    @Inject(MAT_DIALOG_DATA) public payload: any , 
     public dialogRef: MatDialogRef<InventaireCComponent>,
    private shareService: ShareService,
    private inventaireCService:InventaireCService) {
      payload.inventaire.ingredients.forEach((item) => {
        this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle })
      })
      this.getTokenResponsable().subscribe((data: any) => {
        this.resp=data.payload.val().token
      })
      this.inventaire= payload.today;
      console.log(this.inventaire)
    }


  
  ngOnInit() {

    }

    addNewIngredient(){  
      this.ingredients.push({libelle: '', quantite: 0 , unite: '' }) 
     }
     addInventaire(){
      const ingredient: any[] = []
      if (this.inventaire.hasOwnProperty("ingredient")) {
        this.inventaire.ingredient.forEach((item) => {
          console.log(item)
          ingredient.push(item)
        })
      }
      console.log(ingredient)
  
      this.ingredients.forEach((item) => {
        console.log(item)
        if(item.libelle.hasOwnProperty("key")){
        if (ingredient.length > 0) {
          ingredient.forEach(element => {
            console.log(element.key)
            console.log(item.libelle.key)
            if (element.key == item.libelle.key) {
              console.log(element)
              element.quantite=item.quantite
              element.unite=item.unite
            } 
            else
            {
              ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })
  
            }
  
          });}
          else
          ingredient.push({ ...item.libelle, quantite: item.quantite, unite: item.unite })
  
        }})
      console.log(ingredient)
     
           const obj = {
     
            date : this.date,
            ingredient: ingredient,
            token: JSON.parse(localStorage.getItem('profile')).token,
             };
             console.log(obj)
    this.inventaireCService
      .ajoutInventaire(this.payload.invToday ,obj)
      .then((data: any) => {
        this.shareService.showMsg("inventaire envoyé");
        this.valider = false;
        this.shareService.sendNotification({
          title: 'Proposition',
          body: 'inventaire envoyé par Mr :' + JSON.parse(localStorage.getItem('profile')).nom + ' ' + JSON.parse(localStorage.getItem('profile')).prenom,
          to: this.resp
        }).subscribe(() => {
          console.log('notification envoyée avec succes')
        })
        this.dialogRef.close({
         
        });
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });
     
     }

    
      onNoClick(): void {
        this.dialogRef.close();
      }
      getTokenResponsable() {
        console.log(JSON.parse(localStorage.getItem('profile')).responsable)
        return this.shareService.getUser(JSON.parse(localStorage.getItem('profile')).responsable)
      }
    
}

