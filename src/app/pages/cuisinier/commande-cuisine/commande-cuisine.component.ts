import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import {
  MatDialog,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from "@angular/material";
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { CommandeCuisineService } from './commande.service';


@Component({
  selector: "app-commande-cuisine",
  templateUrl: "./commande-cuisine.component.html",
  styleUrls: ["./commande-cuisine.component.scss"]
})
export class CommandeCuisineComponent implements OnInit {
  ingredients: any[] = [];
  ingredient: any;
  dataSource: MatTableDataSource<any>;
  date = new Date().toLocaleDateString();
  
  libelle: any;
  key:string
  quantite:any;
  commandes:any[]=[]
  displayedColumns: string[] = [ 'code', 'ingredient', 'classe', 'famille', 'sfamille' , 'actions'];
  cmdToday: any;
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private CmdBarService : CommandeCuisineService,
    private shareService : ShareService,
    ) {
      }
  
  //pagination
  //tri
  ngOnInit(): void {
    

    this.route.data.subscribe((data) => {
      console.log(data)
      data.commande.ingredients.forEach(element => {
        
        this.ingredients.push({ key: element.key, ...element.payload.val() })
      });
      var test : any = false
      data.commande.commandesCuisineEconomat.forEach(element => {


        if (element.payload.val().date == this.date){
          test=true;
          this.key=element.key
          console.log(element.payload.val())
          if(element.payload.val().hasOwnProperty("ingredient")){
          element.payload.val().ingredient.forEach((ing)=>{
            console.log(ing)
            this.commandes.push(ing)
          })}
          
          console.log(test)
        }})
      console.log(this.commandes)
          if(test==false){
            console.log(test)

          const obj = {
            valid :false ,
            date: this.date,
            token:localStorage.getItem('token'),
          };
          this.CmdBarService
          .ajoutCmd(obj)
          .then((element: any) => { 
            console.log(element)
            console.log(this.commandes)    
            console.log(this.ingredients)    

      })}
         
         this.dataSource = new MatTableDataSource<any>(this.commandes);
        this.dataSource.paginator = this.paginator;
      });
      console.log(this.ingredients)
    
      

  }

  @ViewChildren('I') I;
  event:any
  onSelection(e) {
    this.event = e
    console.log(e.value);
  }
  get selectedIngredient() {
    return this.event ? this.event.value.stockage.nom : '';
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  add(){
    var cmd = this.commandes

        if (cmd.length == 0) {
          this.commandes.push({ libelle:this.libelle, quantite: Number(this.quantite) })
          console.log(cmd.length)
        }
        else {
          var test = false
          // console.log(ingredient.length)
          this.commandes.forEach(element => {
            console.log(element.libelle.key);
            console.log(this.libelle.key);
            if (element.libelle.key == this.libelle.key) {
              console.log(element.libelle.key);
              console.log(this.libelle.key);
              this.shareService.showMsg('ingredient déjà déclaré')
              test = true
              console.log(test)
            }
          });
          if (test == false) {
            this.commandes.push({libelle:this.libelle, quantite: Number(this.quantite)})
            console.log(this.commandes.length)
            console.log(test)
          }
        
      }  
   
    
    console.log(this.commandes)

     this.dataSource = new MatTableDataSource<any>(this.commandes);
      this.libelle='';
      this.quantite=0;

  

  }
  EnvoyerCmd(){
    console.log(this.commandes)
    const obj = {
      ingredient:this.commandes
    };
    console.log('modifier')
    this.CmdBarService
      .SendCmd(obj,this.key)
      .then((data: any) => {
        const profile = JSON.parse(localStorage.getItem('profile'))
        this.shareService.showMsg("Commande envoyée");
        // this.valider = false;
    
      })
      .catch(error => {
        console.error(error.message);
        this.shareService.showMsg(error.message);
        // this.valider = false;

      });



  }
  //filtrer
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}