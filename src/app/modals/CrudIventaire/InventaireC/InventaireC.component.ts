import { Component, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { InventaireCService } from './InventaireC.service';
import { Ingredients } from 'src/app/models/ingredients.model';
@Component({
  selector: 'app-InventaireC',
  templateUrl: './InventaireC.component.html',
  styleUrls: ['./InventaireC.component.scss']
})
export class InventaireCComponent {
  resp: any
  date = new Date().toLocaleDateString();
  unites: string[] = ['g', 'ml', 'portion']
  ingredients: any[] = [
    { libelle: '', quantite: '' }
  ];
  valider = false;
  ing: Ingredients[] = []
  inventaire: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public payload: any,
    public dialogRef: MatDialogRef<InventaireCComponent>,
    private shareService: ShareService,
    private inventaireCService: InventaireCService) {
    payload.inventaire.ingredients.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle, unite: item.payload.val().stockage, prix: item.payload.val().prix })
    })
    this.getTokenResponsable().subscribe((data: any) => {
      this.resp = data.payload.val().token
    })
    this.inventaire = payload.today;
    console.log(this.inventaire)
  }



  ngOnInit() {

  }

  addNewIngredient() {
    this.ingredients.push({ libelle: '', quantite: 0 })
  }
  event: any;

  @ViewChildren('I') I;
  onSelection(e) {
    this.event = e
    console.log(e.value);
  }
  get selectedIngredient() {
    return this.event ? this.event.value.unite.nom : '';
  }
  addInventaire() {
    var ingredient = this.inventaire
    // console.log(ingredient.length)
    // console.log(this.ingredients)
    this.ingredients.forEach((item) => {
      // console.log(item)
      if (item.libelle.hasOwnProperty("key")) {

        // console.log(test)
        // console.log(ingredient.length)
        if (ingredient.length == 0) {
          ingredient.push({ ...item.libelle, quantite: Number(item.quantite) })
          console.log(ingredient.length)
        }
        else {
          var test = false
          // console.log(ingredient.length)
          ingredient.forEach(element => {
            if (element.key == item.libelle.key) {
              this.shareService.showMsg('ingredient déjà déclaré')
              test = true
              console.log(test)
            }
          });
          if (test == false) {
            ingredient.push({ ...item.libelle, quantite: item.quantite })
            console.log(ingredient.length)
            console.log(test)
          }
        }
      }
    })
    console.log(ingredient)

    const obj = {

      // date: this.date,
      ingredient: ingredient,
      // token: JSON.parse(localStorage.getItem('profile')).token,
    };
    // console.log(obj)

    console.log('modifier')
    this.inventaireCService
      .ModifInventaire(this.payload.invToday, obj)
      .then((data: any) => {
        const profile = JSON.parse(localStorage.getItem('profile'))

        this.shareService.showMsg("inventaire envoyé");
        this.valider = false;
        this.shareService.sendNotification({
          title: 'Inventaire',
          body: 'inventaire envoyé par Mr :' + JSON.parse(localStorage.getItem('profile')).nom + ' ' + JSON.parse(localStorage.getItem('profile')).prenom,
          icon: profile.avatar,
          to: this.resp
        }).subscribe(() => {
          console.log('notification envoyée avec succes')
        })
        this.dialogRef.close({
          obj

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

