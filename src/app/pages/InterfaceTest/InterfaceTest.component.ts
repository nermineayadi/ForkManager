import { Component, OnInit } from '@angular/core';
import { TestService } from './InterfaceTest.service';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Boisson } from 'src/app/models/boisson.model';
import { DatePipe } from '@angular/common';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-InterfaceTest',
  templateUrl: './InterfaceTest.component.html',
  styleUrls: ['./InterfaceTest.component.scss']
})
export class InterfaceTestComponent implements OnInit {
test: any ;
  constructor(
    private route: ActivatedRoute,
    private testService: TestService
    ,private shareService : ShareService,
    private storage: AngularFireStorage
) { }

     ngOnInit() {
      this.route.data.subscribe((data) => {
        console.log(data)
       this.test = data.test;
      })
  }
  pipe = new DatePipe('en-US'); // Use your own locale
  trou: any =
  { numero: '', parcours: '' , lng: '', lat: '',icon:''}
  ;
  image: any = '';
 
onchange(event) { 
  const file = event.target.files[0];
  const filePath = 'trou/' + event.target.files[0].name + '.png';
    const fileref = this.storage.ref(filePath);
    this.storage.upload(filePath, file).then(() => {
      fileref.getDownloadURL().subscribe((url: string) => {
        this.trou.icon=url
      })
    });


}
addNewTrou() {
 

  this.testService.addTrou(this.trou).then(() => {
    this.shareService.showMsg('Trou ajouté')
  }).catch(error => {
    this.shareService.showMsg(error.message)
  })
  this.trou =    { numero: '', parcours: '' , lng: '', lat: '',icon:''}

}
  client: any =
  { nom: '', prenom: '' , profession: '', hotel: '', email: '', sexe: '', dateA: '', dateD: '',identifiant: ''}
  ;
addNewClient() {
   this.client.dateA = this.pipe.transform(this.client.dateA, 'shortDate');
   this.client.dateD = this.pipe.transform(this.client.dateD, 'shortDate');

  console.log(this.client.dateA)
  console.log(this.client.dateD)

  this.testService.addClient(this.client).then(() => {
    this.shareService.showMsg('client ajouté')
  }).catch(error => {
    this.shareService.showMsg(error.message)
  })
  this.client =  { nom: '', prenom: '' , profession: '', hotel: '', email: '', sexe: '', dateA: '', dateD: '',identifiant: ''}

}
  categorie: any =
    { nomcategorie: '', numcategorie: '' }
    ;
  addNewCategorie() {
    this.testService.addCategorie(this.categorie).then(() => {
      this.shareService.showMsg('categorie ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.categorie = { nomcategorie: '', numcategorie: '' }
  }

  famille: any =
    { numfamille: 0, nomfamille: '', classe: '',categorie :'' }
    ;
  addNewFamille() {
    this.testService.addfamille(this.famille).then(() => {
      this.shareService.showMsg('famille ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.famille = { numfamille: 0, nomfamille: '', classe: '',categorie :''}
  }
  sfamille: any =
    { numsfamille: 0, nomsfamille: '', famille: '' }
    ;
  addNewSfamille() {
    this.testService.addsfamille(this.sfamille).then(() => {
      this.shareService.showMsg('sfamille ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.sfamille = { numsfamille: 0, nomsfamille: '', famille: '' }
  }
  achat: any =
    { nom: '' }
    ;
  addNewAchat() {
    this.testService.addachat(this.achat).then(() => {
      this.shareService.showMsg('achat ajouté')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.achat = { nom: '' }
  }

  stockage: any =
    { nom: '' }
    ;
  addNewStockage() {
    this.testService.addstockage(this.stockage).then(() => {
      this.shareService.showMsg('stockage ajouté')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.stockage = { nom: '' }

  }
ingredient = new Ingredient();
  addNewIngredient() {
    console.log(this.ingredient)
    const obj = {
      code : this.ingredient.code,
      libelle : this.ingredient.libelle, 
      quantite : this.ingredient.quantite , 
      prix : this.ingredient.prix, 
      classe : {
        key : this.ingredient.classe.key, 
       nom : this.ingredient.classe.payload.val().nomclasse
      },
      famille : {
        key : this.ingredient.famille.key, 
        nom: this.ingredient.famille.payload.val().nomfamille
      },
      sfamille: {
        key : this.ingredient.sfamille.key, 
        nom : this.ingredient.sfamille.payload.val().nomsfamille
      },
     achat : {
        key : this.ingredient.achat.key, 
        value : this.ingredient.achat.payload.val().nom
      },
      stockage : {
        key : this.ingredient.stockage.key, 
        nom : this.ingredient.stockage.payload.val().nom
      },
    }
    this.testService.addingredient(obj).then(() => {
      this.shareService.showMsg('ingredients ajoutés');
      this.ingredient =new Ingredient();
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })

  }

  boisson = new Boisson();
  addNewBoisson() {
    console.log(this.boisson)
    const obj = {
      code : this.boisson.code,
      libelle : this.boisson.libelle, 
      quantite : this.boisson.quantite , 
      prix : this.boisson.prix, 
      classe : {
        key : this.boisson.classe.key, 
        nom : this.boisson.classe.payload.val().nomclasse
      },
      famille : {
        key : this.boisson.famille.key, 
        nom : this.boisson.famille.payload.val().nomfamille
      },
      sfamille: {
        key : this.boisson.sfamille.key, 
        nom : this.boisson.sfamille.payload.val().nomsfamille
      },
     achat : {
        key : this.boisson.achat.key, 
        nom : this.boisson.achat.payload.val().nom
      },
      stockage : {
        key : this.boisson.stockage.key, 
        nom : this.boisson.stockage.payload.val().nom
      },
    }
    this.testService.addboisson(obj).then(() => {
      this.shareService.showMsg('boisson ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })

  }
  unite: any =
    { nom: '' }
    ;
  addNewUnite() {
    this.testService.addunite(this.unite).then(() => {
      this.shareService.showMsg('unité ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.unite =     { nom: '' }


  }
  classe: any =
    { numclasse: 0, nomclasse: '' }
  addNewClasse() {
    this.testService.addclasse(this.classe).then(() => {
      this.shareService.showMsg('classe ajoutée')
    }).catch(error => {
      this.shareService.showMsg(error.message)
    })
    this.classe = { numclasse: 0, nomclasse: '' }

  }




}
