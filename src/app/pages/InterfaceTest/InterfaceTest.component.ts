import { Component, OnInit } from '@angular/core';
import { TestService } from './InterfaceTest.service';

@Component({
  selector: 'app-InterfaceTest',
  templateUrl: './InterfaceTest.component.html',
  styleUrls: ['./InterfaceTest.component.scss']
})
export class InterfaceTestComponent implements OnInit {
  
  constructor(private testService : TestService) { }

  ngOnInit() {
  }
  categories: any[] = [
    { nomcategorie: '',numcategorie:'' }
  ];
  familles: any[] = [
    {numfamille:0,nomfamille:'',classe:''}
  ];
  sfamilles: any[] = [
    {numsfamille:0,nomsfamille:'',famille:''}
  ];
  achats: any[] = [
    { nom: '' }
  ];
  unites: any[] = [
    { nom: '' }
  ];
  stockages: any[] = [
    { nom: '' }
  ];
  ingredients: any[] = [
    { code :'' , libelle :'', classe:'' , famille:'' , sfamilles:'' , achats:'',stockage:'',quantite:0,prix : 0  }
  ];
  boissons: any[] = [
    { code :'' , libelle :'', classe:'' , famille:'' , sfamilles:'' , achats:'',stockage:'',quantite:0,prix : 0  }
  ];
  classes : any[]=[
    {numclasse:0 ,nomclasse:''}
  ]

  addNewCategories() {
    this.categories.push({ nomcategorie: '',numcategorie:'' })
  }
  addCategories() {
this.testService.addCategories(this.categories).then(()=>{
  this.testService.showMsg('categories ajoutées')
}).catch(error =>{
  this.testService.showMsg(error.message)
})
  }
  addNewFamilles() {
    this.familles.push( {numfamille:0,nomfamille:'',classe:''})
  }
  addFamilles() {
    this.testService.addfamilles(this.familles).then(()=>{
      this.testService.showMsg('familles ajoutées')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewSfamilles() {
    this.sfamilles.push({numsfamille:0,nomsfamille:'',famille:''})
  }
  addSfamilles() {
    this.testService.addsfamilles(this.sfamilles).then(()=>{
      this.testService.showMsg('sfamilles ajoutées')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewAchats() {
    this.achats.push({ nom: '' })
  }
  addAchats() {
    this.testService.addachat(this.achats).then(()=>{
      this.testService.showMsg('achats ajoutés')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewStockage() {
    this.stockages.push( { nom: '' })
  }

  addStockage() {
    this.testService.addstockage(this.stockages).then(()=>{
      this.testService.showMsg('stockages ajoutés')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewIngredients() {
    this.ingredients.push( { code :'' , libelle :'', classe:'' , famille:'' , sfamilles:'' , achats:'',stockage:'',quantite:0,prix : 0 })
  }
  addIngredients() {
    this.testService.addingredients(this.ingredients).then(()=>{
      this.testService.showMsg('ingredients ajoutés')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewBoissons() {
    this.boissons.push( { code :'' , libelle :'', classe:'' , famille:'' , sfamilles:'' , achats:'',stockage:'',quantite:0,prix : 0 })
  }
  addBoissons() {
    this.testService.addboissons(this.boissons).then(()=>{
      this.testService.showMsg('boissons ajoutées')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewUnites() {
    this.unites.push({ nom: '' })
  }
  addUnites() {
    this.testService.addunites(this.unites).then(()=>{
      this.testService.showMsg('unités ajoutées')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  addNewClasses() {
    this.classes.push( {numclasse:0 ,nomclasse:''})
  }
  addClasses() {
    this.testService.addclasses(this.classes).then(()=>{
      this.testService.showMsg('classes ajoutées')
    }).catch(error =>{
      this.testService.showMsg(error.message)
    })
  }
  


}
