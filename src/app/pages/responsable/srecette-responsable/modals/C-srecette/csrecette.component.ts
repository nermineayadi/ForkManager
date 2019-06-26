import { Component, OnInit, Inject, ViewChildren } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import {  FormControl } from '@angular/forms';
import { CSrecetteService } from "./csrecette.service";
import { ShareService } from 'src/app/services/share.service';
import { Ingredients } from 'src/app/models/ingredients.model';
import { SRecettes } from 'src/app/models/srecettes.model';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-csrecette',
  templateUrl: './csrecette.component.html',
  styleUrls: ['./csrecette.component.scss'],
})
export class CSrecetteComponent implements OnInit {
  ngOnInit(){
    this.filteredIngs.next(this.ing)
    this.ingFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterIng();
    });
    this.filteredSrec.next(this.srec)
    this.srecFilterCtrl.valueChanges
    .pipe(takeUntil(this._onDestroy))
    .subscribe(() => {
      this.filterSrec();
    });
  }
      nomsrecette : FormControl = new FormControl();
      nbPart : FormControl = new FormControl();
      duree : FormControl = new FormControl();
      code  :FormControl = new FormControl();
// ingredients
ingredients: any[] =[]
displayedColumnsIng: string[] = [ 'code', 'ingredient','quantite' ,'delete'];
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
}
addIng(){
  console.log(this.libelleIng)
  let used = 0
  let test = false
  if(this.libelleIng){
    this.ingredients.forEach((element)=>{
      if(this.libelleIng.key==element.key){
       test= true
      }
    })

if(test==false){
this.ingredients.push({...this.libelleIng , quantite :Number(this.quantiteIng)})
this.payload.ingredients.forEach(element => {
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
  this.ingredients.forEach((element:any) => {
    if(element.key==ing) {
      element.quantite=Number(e)
    } 
  })
  this.DtIngredients = new MatTableDataSource<any>(this.ingredients);

}
deleteIng(ing : any){
  let used = 0 ;
  const index = this.ingredients.indexOf(ing, 0);
if (index > -1) {
  this.ingredients.splice(index, 1);
  this.payload.ingredients.forEach(element => {
    if(element.key==ing.key){
      used = element.payload.val().used
    }
  });
  this.shareService.updateIngredient(ing.key , used--)
}
this.DtIngredients = new MatTableDataSource<any>(this.ingredients);

}
@ViewChildren('I') I;
onSelection(e) {
 this.event = e
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
}
addSrec(){
  let used = 0
  let test = false
  if(this.libelleSrec){
    this.srecettes.forEach((element)=>{
      if(this.libelleSrec.key==element.key){
       test= true
      }
    })

if(test==false){
this.srecettes.push({...this.libelleSrec , quantite :Number(this.quantiteSrec)})
this.payload.srecettes.forEach(element => {
  if(element.key==this.libelleSrec.key){
    used = element.payload.val().used
  }
});
this.shareService.updateSrecette(this.libelleSrec.key , used++)
console.log(this.srecettes);
this.DtSrecettes = new MatTableDataSource<any>(this.srecettes);
}
else{
this.shareService.showMsg('Sous recette déjà utilisée')
}

  }


}
updateSrec(Srec,e){
  this.srecettes.forEach((element:any) => {
    if(element.key==Srec) {
      element.quantite=Number(e)
   
    } 
  })
  this.DtSrecettes = new MatTableDataSource<any>(this.srecettes);

}
deleteSrec(Srec : any){
  let used = 0 ;
  const index = this.srecettes.indexOf(Srec, 0);
if (index > -1) {
  this.srecettes.splice(index, 1);
  this.payload.srecettes.forEach(element => {
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
     public dialogRef: MatDialogRef<CSrecetteComponent>,
     @Inject(MAT_DIALOG_DATA) public payload: any , 
     private  csrecetteservice: CSrecetteService
     ,private shareService : ShareService

     ) {
      payload.ingredients.forEach((item) => {
        this.ing.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().libelle ,unite: item.payload.val().stockage ,prix : item.payload.val().prix})
      })

      payload.srecettes.forEach((item) => {
        console.log(item.payload.val())
        this.srec.push({ key: item.key, code: item.payload.val().code, libelle: item.payload.val().nomsrecette })
  
      })
      console.log(this.srec)
     

      }

      ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
      }
  onNoClick(): void {
    this.dialogRef.close();
  }


  ajoutsrecette() {
    
    const obj = {
     
      
      ingredient: this.ingredients,
      srecette: this.srecettes,
     used:0,
      nomsrecette : this.nomsrecette.value,
      nbPart : Number(this.nbPart.value),
           duree : Number(this.duree.value),    
           code : Number(this.code.value)

    };
     this.csrecetteservice
    .ajoutSrecette(obj)
    .then((data: any) => {
      this.shareService.showMsg("srecette ajoutée");
      this.valider= false;
      this.dialogRef.close({
        key: data.key,
        ...obj
      });
    })
    .catch(error => {
      console.error(error.message);
      this.shareService.showMsg(error.message);
      this.valider= false;
    });
    
}

}




