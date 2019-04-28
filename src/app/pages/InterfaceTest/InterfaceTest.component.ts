import { Component, OnInit } from '@angular/core';
import { TestService } from './InterfaceTest.service';
import { ActivatedRoute } from '@angular/router';
import { Boisson } from 'src/app/models/boisson.model';
import { Ingredient } from 'src/app/models/ingredient.model';

@Component({
  selector: 'app-InterfaceTest',
  templateUrl: './InterfaceTest.component.html',
  styleUrls: ['./InterfaceTest.component.scss']
})
export class InterfaceTestComponent implements OnInit {
test: any ;
  constructor(
    private route: ActivatedRoute,
    private testService: TestService) { }

     ngOnInit() {
      this.route.data.subscribe((data) => {
        console.log(data)
       this.test = data.test;
      })
  }

  categorie: any =
    { nomcategorie: '', numcategorie: '' }
    ;
  addNewCategorie() {
    this.testService.addCategorie(this.categorie).then(() => {
      this.testService.showMsg('categorie ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.categorie = { nomcategorie: '', numcategorie: '' }
  }

  famille: any =
    { numfamille: 0, nomfamille: '', classe: '',categorie :'' }
    ;
  addNewFamille() {
    this.testService.addfamille(this.famille).then(() => {
      this.testService.showMsg('famille ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.famille = { numfamille: 0, nomfamille: '', classe: '',categorie :''}
  }
  sfamille: any =
    { numsfamille: 0, nomsfamille: '', famille: '' }
    ;
  addNewSfamille() {
    this.testService.addsfamille(this.sfamille).then(() => {
      this.testService.showMsg('sfamille ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.sfamille = { numsfamille: 0, nomsfamille: '', famille: '' }
  }
  achat: any =
    { nom: '' }
    ;
  addNewAchat() {
    this.testService.addachat(this.achat).then(() => {
      this.testService.showMsg('achat ajouté')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.achat = { nom: '' }
  }

  stockage: any =
    { nom: '' }
    ;
  addNewStockage() {
    this.testService.addstockage(this.stockage).then(() => {
      this.testService.showMsg('stockage ajouté')
    }).catch(error => {
      this.testService.showMsg(error.message)
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
        value : this.ingredient.classe.payload.val().nomclasse
      },
      famille : {
        key : this.ingredient.famille.key, 
        value : this.ingredient.famille.payload.val().nomfamille
      },
      sfamille: {
        key : this.ingredient.sfamille.key, 
        value : this.ingredient.sfamille.payload.val().nomsfamille
      },
     achat : {
        key : this.ingredient.achat.key, 
        value : this.ingredient.achat.payload.val().nom
      },
      stockage : {
        key : this.ingredient.stockage.key, 
        value : this.ingredient.stockage.payload.val().nom
      },
    }
    this.testService.addingredient(obj).then(() => {
      this.testService.showMsg('ingredients ajoutés')
    }).catch(error => {
      this.testService.showMsg(error.message)
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
        value : this.boisson.classe.payload.val().nomclasse
      },
      famille : {
        key : this.boisson.famille.key, 
        value : this.boisson.famille.payload.val().nomfamille
      },
      sfamille: {
        key : this.boisson.sfamille.key, 
        value : this.boisson.sfamille.payload.val().nomsfamille
      },
     achat : {
        key : this.boisson.achat.key, 
        value : this.boisson.achat.payload.val().nom
      },
      stockage : {
        key : this.boisson.stockage.key, 
        value : this.boisson.stockage.payload.val().nom
      },
    }
    this.testService.addboisson(obj).then(() => {
      this.testService.showMsg('boisson ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })

  }
  unite: any =
    { nom: '' }
    ;
  addNewUnite() {
    this.testService.addunite(this.unite).then(() => {
      this.testService.showMsg('unité ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.unite =     { nom: '' }


  }
  classe: any =
    { numclasse: 0, nomclasse: '' }
  addNewClasse() {
    this.testService.addclasse(this.classe).then(() => {
      this.testService.showMsg('classe ajoutée')
    }).catch(error => {
      this.testService.showMsg(error.message)
    })
    this.classe = { numclasse: 0, nomclasse: '' }

  }




}
