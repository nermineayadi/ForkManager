import { Component, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { InventaireBService } from './InventaireB.service';
import { Boissons } from 'src/app/models/boissons.model';
@Component({
  selector: 'app-InventaireB',
  templateUrl: './InventaireB.component.html',
  styleUrls: ['./InventaireB.component.scss']
})
export class InventaireBComponent {
  resp: any
  date = new Date().toLocaleDateString();
  unites: string[] = ['g', 'ml', 'portion']
  boissons: any[] = [
    { libelle: '', quantite: '' }
  ];
  valider = false;
  ing: Boissons[] = []
  inventaire: any

  constructor(
    @Inject(MAT_DIALOG_DATA) public payload: any,
    public dialogRef: MatDialogRef<InventaireBComponent>,
    private shareService: ShareService,
    private inventaireBService: InventaireBService) {
    payload.inventaire.boissons.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle, unite: item.payload.val().stockage, prix: item.payload.val().prix })
    })
    this.getTokenResponsable().subscribe((data: any) => {
      console.log(data.payload.val())
      this.resp = data.payload.val().token
    })
    this.inventaire = payload.today;
    console.log(this.inventaire)
  }



  ngOnInit() {

  }

  addNewboisson() {
    this.boissons.push({ libelle: '', quantite: 0 })
  }
  event: any;

  @ViewChildren('I') I;
  onSelection(e) {
    this.event = e
    console.log(e.value);
  }
  get selectedboisson() {
    return this.event ? this.event.value.unite.nom : '';
  }
  addInventaire() {
    var test = false
    var boisson = this.inventaire
    // console.log(boisson.length)
    // console.log(this.boissons)
    this.boissons.forEach((item) => {
      // console.log(item)
      if (item.libelle.hasOwnProperty("key")) {

        // console.log(test)
        // console.log(boisson.length)
        if (boisson.length == 0) {
          boisson.push({ ...item.libelle, quantite: Number(item.quantite) })
          console.log(boisson.length)
        }
        else {
          
          // console.log(boisson.length)
          boisson.forEach(element => {
            if (element.key == item.libelle.key) {
              this.shareService.showMsg('boisson déjà déclarée')
              test = true
              console.log(test)
            }
          });
          if (test == false) {
            boisson.push({ ...item.libelle, quantite: item.quantite })
            console.log(boisson.length)
            console.log(test)
          }
        }
      }
    })
    console.log(boisson)

    const obj = {

      // date: this.date,
      boisson: boisson,
      // token: JSON.parse(localStorage.getItem('profile')).token,
    };
    // console.log(obj)

    console.log('modifier')
    this.inventaireBService
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

