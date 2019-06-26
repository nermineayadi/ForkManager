import { Component, OnInit, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { UPlatService } from "./uplat.service";
import { ShareService } from 'src/app/services/share.service';
import { SRecettes } from 'src/app/models/srecettes.model';
import { Ingredients } from 'src/app/models/ingredients.model';
import { takeUntil } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-cplat',
  templateUrl: './Uplat.component.html',
  styleUrls: ['./Uplat.component.scss'],
})
export class UplatComponent implements OnInit {
 
// ingredients
  ingredients: any[] =[]
  displayedColumnsIng: string[] = [ 'code', 'ingredient','quantite' ,'pru', 'prt','delete'];
  DtIngredients: MatTableDataSource<any>;
  libelleIng:any 
  quantiteIng:any
  event:any
  public ingFilterCtrl: FormControl = new FormControl();
  public filteredIngs: ReplaySubject<Ingredients[]> = new ReplaySubject<Ingredients[]>(1);
  ing: Ingredients[] = []
  protected filterIng() {
    if (!this.ing) {
      return;
    }
    // get the search keyword
    let search = this.ingFilterCtrl.value;
    console.log(search)
    if (!search) {
      this.filteredIngs.next(this.ing);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredIngs.next(
      this.ing.filter(element => 
        element.libelle.toLowerCase().indexOf(search) > -1)
    );
    console.log(this.filteredIngs)
  }
  addIng(){
    let used = 0
    let test = false
    if(this.libelleIng){
      this.ingredients.forEach((element)=>{
        console.log(this.libelleIng.key)
        console.log(element.key)
        if(this.libelleIng.key==element.key){
         test= true
        }
      })
      console.log(test)

if(test==false){
  this.ingredients.push({...this.libelleIng , quantite :this.quantiteIng})
  this.payload.plat.ingredients.forEach(element => {
    if(element.key==this.libelleIng.key){
      used = element.payload.val().used
    }
  });
  this.shareService.updateIngredient(this.libelleIng.key , used++)
  console.log(this.ingredients);
  this.DtIngredients = new MatTableDataSource<any>(this.ingredients);
}
else{
  this.shareService.showMsg('ingrédient déjà utilisé')
}

    }
 

  }
  updateIng(ing,e){
    console.log(ing);
    console.log(e);
    this.ingredients.forEach((element:any) => {
      if(element.key==ing) {
        element.quantite=Number(e)
     
      console.log(element) } 
    })
    console.log(this.ingredients);
    this.DtIngredients = new MatTableDataSource<any>(this.ingredients);

  }
  deleteIng(ing : any){
    let used = 0 ;
    const index = this.ingredients.indexOf(ing, 0);
  if (index > -1) {
    console.log(true)
    this.ingredients.splice(index, 1);
    this.payload.plat.ingredients.forEach(element => {
      if(element.key==ing.key){
        used = element.payload.val().used
      }
    });
    this.shareService.updateIngredient(ing.key , used--)
  }
  console.log(this.ingredients)
  this.DtIngredients = new MatTableDataSource<any>(this.ingredients);

  }
  PrixUIng(element) : number{
    
    var prix : any ;
 this.ing.forEach((row)=>{
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
 @ViewChildren('I') I;
 onSelection(e) {
   this.event = e
   console.log(e.value);
 }
 get selectedIngredient() {
  return this.event ? this.event.value.unite.nom : '';
}


// sous recettes
srecettes: any[] =[]
  displayedColumnsSrec: string[] = [ 'code', 'srecette','quantite','delete'];
  DtSrecettes: MatTableDataSource<any>;
  libelleSrec:any ;
  quantiteSrec:any;
  public srecFilterCtrl: FormControl = new FormControl();
  public filteredSrec: ReplaySubject<SRecettes[]> = new ReplaySubject<SRecettes[]>(1);
  srec: SRecettes[] = []
  protected filterSrec() {
    if (!this.srec) {
      return;
    }
    // get the search keyword
    let search = this.ingFilterCtrl.value;
    console.log(search)
    if (!search) {
      this.filteredSrec.next(this.srec);
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the banks
    this.filteredSrec.next(
      this.srec.filter(element => 
        element.libelle.toLowerCase().indexOf(search) > -1)
    );
    console.log(this.filteredSrec)
  }
  addSrec(){
    let used = 0
    let test = false
    if(this.libelleSrec){
      this.srecettes.forEach((element)=>{
        console.log(this.libelleSrec.key)
        console.log(element.key)
        if(this.libelleSrec.key==element.key){
         test= true
        }
      })
      console.log(test)

if(test==false){
  this.srecettes.push({...this.libelleSrec , quantite :this.quantiteSrec})
  this.payload.plat.srecettes.forEach(element => {
    if(element.key==this.libelleSrec.key){
      used = element.payload.val().used
    }
  });
  this.shareService.updateIngredient(this.libelleSrec.key , used++)
  console.log(this.srecettes);
  this.DtSrecettes = new MatTableDataSource<any>(this.srecettes);
}
else{
  this.shareService.showMsg('Sous recette déjà utilisée')
}

    }
 

  }
  updateSrec(Srec,e){
    console.log(Srec);
    console.log(e);
    this.srecettes.forEach((element:any) => {
      if(element.key==Srec) {
        element.quantite=Number(e)
     
      console.log(element) } 
    })
    console.log(this.srecettes);
    this.DtSrecettes = new MatTableDataSource<any>(this.srecettes);

  }
  deleteSrec(Srec : any){
    let used = 0 ;
    const index = this.srecettes.indexOf(Srec, 0);
  if (index > -1) {
    console.log(true)
    this.srecettes.splice(index, 1);
    this.payload.plat.srecettes.forEach(element => {
      if(element.key==Srec.key){
        used = element.payload.val().used
      }
    });
    this.shareService.updateIngredient(Srec.key , used--)
  }
  console.log(this.srecettes)
  this.DtSrecettes = new MatTableDataSource<any>(this.srecettes);

  }


  // autres
  protected _onDestroy = new Subject<void>();
  valider = false;
  plat: any;




  constructor(
    public dialogRef: MatDialogRef<UplatComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, 
    private UPlatService: UPlatService, 
    private shareService: ShareService
  ) {
    console.log(payload.value)
    this.plat = payload.value;
    this.plat.nomPlat = payload.value.nomPlat;
    this.plat.duree = Number(payload.value.duree);
    this.plat.prix = Number(payload.value.prix);

    payload.plat.ingredients.forEach((item) => {
      this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle ,unite: item.payload.val().stockage,prix : item.payload.val().prix})
    })
    console.log(this.ing);
    payload.plat.srecettes.forEach((item) => {
      this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
    })
    console.log(this.srec);
  
    payload.plat.categories.forEach((item) => {
      if (item.key == payload.value.categorie.key) {
        this.plat.categorie = item;
      }
    })
    payload.plat.familles.forEach((item) => {
      if (item.key == payload.value.famille.key) {
        this.plat.famille = item;
      }
    })
    payload.plat.sfamilles.forEach((item) => {
      if (item.key == payload.value.sfamille.key) {
        this.plat.sfamille = item;
      }
    })
    payload.value.ingredient.forEach((element)=>{
      this.plat.cout+=element.libelle.prix*element.quantite

    })
    

if(this.payload.value.hasOwnProperty('ingredient')){
  this.payload.value.ingredient.forEach((element)=>{
    console.log(element)
    this.ingredients.push(element)
  })
  console.log(this.ingredients)
  this.DtIngredients = new MatTableDataSource<any>(this.ingredients);
}
     
if(this.payload.value.hasOwnProperty('srecette')){
  this.payload.value.srecette.forEach((element)=>{
    console.log(element)
    this.srecettes.push(element)
  })
  console.log(this.ingredients)
  this.DtIngredients = new MatTableDataSource<any>(this.ingredients);
}

    

  }
  ngOnInit() {
    console.log(this.payload.value)
    this.plat.cout=this.coutPlat;
    console.log(this.plat.cout)
    console.log(this.ing)

    this.filteredIngs.next(this.ing)
    console.log(this.filteredIngs)
    this.ingFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterIng();
    });
    this.filteredSrec.next(this.srec)
    console.log(this.filteredSrec)
    this.srecFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterSrec();
    });
  }
  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  EditPlat() {
   
    this.valider = true;
    const obj = {
      nomPlat: this.plat.nomPlat,
      prix:this.plat.prix,
      duree: this.plat.duree,
      valide: true,
      categorie: {
        key: this.plat.categorie.key,
        nomcategorie: this.plat.categorie.payload.val().nomcategorie
      }
      ,
      famille: {
        key: this.plat.famille.key,
        nomfamille: this.plat.famille.payload.val().nomfamille
      }
      ,
      sfamille: {
        key: this.plat.sfamille.key,
        nomsfamille: this.plat.sfamille.payload.val().nomsfamille
      }
      ,
      ingredient: this.ingredients,
      srecette: this.srecettes,
      // etape:this.etapes,
    };
    console.log(obj)
    
    this.UPlatService
      .updatePlat(obj, this.payload.key)
      .then(() => {
        const profile = JSON.parse(localStorage.getItem('profile'))
        this.shareService.showMsg("plat modifié");
        this.valider = false;
        this.shareService.sendNotification({
          title: 'validation Plat',
          body : this.plat.nomPlat,
          icon : profile.avatar,
          to: this.payload.value.token
        }).subscribe(() => {
          console.log('notification envoyée avec succes')
        })
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        this.valider = false;

      });
    this.dialogRef.close();
  
}

}




