import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Plat } from 'src/app/models/plat.model';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Boisson } from 'src/app/models/boisson.model';

@Component({
    selector: 'app-acceuil-responsable',
    templateUrl: './acceuil-responsable.component.html',
    styleUrls: ['./acceuil-responsable.component.scss']
})
export class AcceuilResponsableComponent implements OnInit {
  
 
    acceuil : any;
    plats: any[]=[];
    boissons: any[]=[];
    ingredients: any[]=[];
    srecettes: any[]=[];
    sortedPlatMarge:any=[];
    dtPlats:MatTableDataSource<any>;
    dtIngredients:MatTableDataSource<any>;
    dtBoissons:MatTableDataSource<any>;
    dtSrecettes:MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor( public dialog: MatDialog,
        private route: ActivatedRoute,
       ) {
            this.route.data.subscribe((data) => {
                console.log(data)
                  this.RemplirTables(data)
           
                this.DataTables();
                this.acceuil = data.acceuil;
              })
               this.sortedPlatMarge = this.plats.sort((t1, t2) => {
                const marge1 = this.margePlat(t1);
                const marge2 = this.margePlat(t2);
                if (marge1 > marge2) { return -1; }
                if (marge1 < marge2) { return 1; }
                return 0;
              });
              console.log(this.plats)
              console.log(this.sortedPlatMarge)
              console.log(this.sortedPlatMarge[0])

         }
   RemplirTables(data) {
    data.acceuil.plats.forEach(element => {
        this.plats.push({ key: element.key, ...element.payload.val() })
    })
    data.acceuil.boissons.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
    })
    data.acceuil.ingredients.forEach(element => {
        this.ingredients.push({ key: element.key, ...element.payload.val() })
    })
    data.acceuil.srecettes.forEach(element => {
        this.srecettes.push({ key: element.key, ...element.payload.val() })
    })
    }
    DataTables() {
        this.dtPlats = new MatTableDataSource<Plat>(this.plats);
        this.dtPlats.paginator = this.paginator;
        this.dtIngredients = new MatTableDataSource<Ingredient>(this.ingredients);
        this.dtIngredients.paginator = this.paginator;
        this.dtBoissons = new MatTableDataSource<Boisson>(this.boissons);
        this.dtBoissons.paginator = this.paginator;
        this.dtSrecettes = new MatTableDataSource<Boisson>(this.srecettes);
        this.dtSrecettes.paginator = this.paginator;
    }
    ngOnInit(): void { }
    get lengthPlats (){
        return this.plats.length
    }
    get lengthBoissons (){
        return this.boissons.length
    }
    get lengthIngredients (){
        return this.ingredients.length
    }
    get lengthSrecettes (){
        return this.srecettes.length
    }
    
      margePlat(Plat:any){
        var marge : number=0;
        marge = (Plat.prix-Number(this.coutPlat(Plat)))/Number(this.coutPlat(Plat))*10
        console.log(Plat.nomPlat)

        console.log(marge*10)
        return marge>0 ? Math.round(marge*10): 0;
      }
      coutPlat(plat : any){
         let cout:any=0;
        plat.ingredient.forEach((element)=>{
            cout+=element.prix*element.quantite
           })
             return cout.toFixed(3);
      }
}
