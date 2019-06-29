import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ShareService } from '../services/share.service';
import { element } from '@angular/core/src/render3';
import { ClientService } from './client.service';
export interface Transaction {
  key: string;
  nom: string;
  prix: number;
  qte: number;
}
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  clients: any[];
  trous: any[];
  plats: any[];
  boissons: any[];
  platsV: any[] = [];
  boissonsV: any[] = [];
  serveurs: any[] = [];

  // clientForm: FormGroup
  id = new FormControl('', Validators.required)
  parcours = new FormControl('', Validators.required)
  trou = new FormControl('', Validators.required)
  couleur = new FormControl('', Validators.required)
  emplacement = new FormControl('', Validators.required)

  constructor(private route: ActivatedRoute, private shareService: ShareService,private clientService: ClientService) {
    // this.clientForm = this.formBuilder.group({
    //     id: new FormControl('',  [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    //     parcours :new FormControl('', Validators.required),
    //     trou :  new FormControl('', Validators.required),
    //     color : new FormControl('', Validators.required),
    // })

  }
  displayedColumns: string[] = ['nom', 'qte', 'prix'];
  transactions: Transaction[] = [];
  action: string = '';

  getTotalprix() {
    return this.transactions.map(t => t.prix).reduce((acc, value) => acc + value, 0);
  }
  page: number = 3;
  opened = false;
  onSerch = false;
  selectedItem: string = '';

  addPlat(plat: any) {
    const index = this.transactions.findIndex((item: any) => {
      return item.key == plat.key;
    })
    if (index == -1) {
      const obj = {
        key: plat.key,
        nom: plat.payload.val().nomPlat,
        prix: Number(plat.payload.val().prix),
        qte: 1,
      }
      this.transactions.push(obj)
      this.platsV.push(plat.key)

    }
    else {
      this.transactions[index].qte += 1;
      this.transactions[index].prix = this.transactions[index].prix + Number(plat.payload.val().prix);
    }
    this.transactions = [...this.transactions]

  }
  annuler() {
    this.transactions = [];
  }
  get isValid(): boolean {
    return this.id.invalid || this.parcours.invalid || this.emplacement.invalid || this.couleur.invalid || this.trou.invalid || this.transactions.length == 0
  }
  passer() {
    let Plats: any[] = [];
    let Boissons: any[] = [];
    let index
    if (this.boissonsV.length > 0) {
      this.boissonsV.forEach(element => {
        index = this.transactions.findIndex((item: any) => {
          return item.key == element;
        })
        Boissons.push({ boisson: element, qte: this.transactions[index].qte })
      })
    }
    if (this.platsV.length > 0) {
      this.platsV.forEach(element => {

        index = this.transactions.findIndex((item: any) => {

          return item.key == element;
        })
        Plats.push({ plat: element, qte: this.transactions[index].qte })
      })
    }
    if (this.Existe == true && this.Trou == true) {
      let obj
      if (Boissons.length > 0 && Plats.length == 0) {
        obj = {
          id: this.id.value,
          boissons: Boissons,
          date: new Date().toLocaleString(),
          localisation: {
            trou: this.Localisation,
            emplacement: this.emplacement.value,
            couleur: this.couleur.value
          }
        }
      }
      else {
        if (Plats.length > 0 && Boissons.length == 0) {
          obj = {
            id: this.id.value,
            plats: Plats,
            date: new Date().toLocaleString(),
            localisation: {
              trou: this.Localisation,
              emplacement: this.emplacement.value,
              couleur: this.couleur.value
            }
          }
        }

        else {
          obj = {
            id: this.id.value,
            boissons: Boissons,
            plats: Plats,
            date: new Date().toLocaleString(),
            localisation: {
              trou: this.Localisation,
              emplacement: this.emplacement.value,
              couleur: this.couleur.value
            }
          }
        }
      }
      console.log(obj)
       this.clientService.addCmdGolf(obj).then((data)=>{
        this.shareService.showMsg('Commande Envoyée avec Succès')
        
        this.serveurs.forEach(element => {
          this.shareService.sendNotification({
            title: 'Commande Golf',
            body : this.InformationClient,
            to: element
          }).subscribe(() => {
            console.log('notification envoyée avec succes')
          })
        });
     
       })
    }
    else {
      if (this.Existe == false) {
        this.shareService.showMsg('Verifiez Votre Identifiant')
      }
      if (this.Trou == false) {
        this.shareService.showMsg('Verifiez Numero Trou')
      }
    }
    this.transactions = [];
    this.boissonsV=[];
    this.platsV=[];
  }
  get Trou(): boolean {
    return this.trou.value <= 18 && this.trou.value >= 1 ? true : false
  }
  get Existe(): boolean {
    let test = false;
    this.clients.forEach(element => {

      if (element.payload.val().identifiant == this.id.value)
        test = true

    });
    return test
  }
  get InformationClient(): string {
    let test
    this.clients.forEach(element => {

      if (element.payload.val().identifiant == this.id.value)
        test = element.payload.val()

    });
    return test.nom+' '+test.prenom
  }
  get Localisation(): string {
    let loc: string
    this.trous.forEach(trou => {


      if (trou.payload.val().numero == this.trou.value && trou.payload.val().parcours == this.parcours.value) {
        loc = trou.key

      }


    });
    return loc
  }
  addBoisson(boisson: any) {
    const index = this.transactions.findIndex((item: any) => {
      return item.key == boisson.key;
    })
    if (index == -1) {
      const obj = {
        key: boisson.key,
        nom: boisson.payload.val().libelle,
        prix: Number(boisson.payload.val().prix),
        qte: 1,
      }
      this.transactions.push(obj)
      this.boissonsV.push(boisson.key)

    }
    else {
      this.transactions[index].qte += 1;
      this.transactions[index].prix = this.transactions[index].prix + Number(boisson.payload.val().prix);
    }
    this.transactions = [...this.transactions]

  }

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.plats = data.client.plats;
      this.boissons = data.client.boissons;
      this.clients = data.client.clients;
      this.trous = data.client.trous
      data.client.users.forEach(element => {
        if(element.payload.val().fonction=='serveur'){
          this.serveurs.push(element.payload.val().token)
        }
        
      });
    })
  }
}
