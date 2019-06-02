import { Component, OnInit, ViewChild, ViewChildren } from "@angular/core";
import {
  MatDialog,
  MatTableDataSource,
  MatPaginator,
  MatSort
} from "@angular/material";
import { ActivatedRoute } from '@angular/router';
import { CmdBarService } from './commande-bar.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-commande-bar',
  templateUrl: './commande-bar.component.html',
  styleUrls: ['./commande-bar.component.scss']
})
export class CommandeBarComponent implements OnInit {
  boissons: any[] = [];
  boisson: any;
  dataSource: MatTableDataSource<any>;
  date = new Date().toLocaleDateString();
  libelle: any;
  key:string
  quantite:number;
  commandes:any[]=[]
  displayedColumns: string[] = [ 'code', 'boisson', 'classe', 'famille', 'sfamille','quantite' , 'actions'];
  cmdToday: any;
  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private CmdBarService : CmdBarService,
    private shareService : ShareService,
    ) {
      }
  
  //pagination
  //tri
  ngOnInit(): void {
    

    this.route.data.subscribe((data) => {
      console.log(data)
      data.commande.boissons.forEach(element => {
        
        this.boissons.push({ key: element.key, ...element.payload.val() })
      });
      var test : any = false
      data.commande.commandesBarEconomat.forEach(element => {
        console.log(element.payload.val().date)
        console.log(this.date)

        if (element.payload.val().date == this.date){
          test=true;
          this.key=element.key
          console.log(element)
          this.commandes.push(...element.payload.val())
          console.log(test)
        }})
      
          if(test==false){
            console.log(test)

          const obj = {
            valid :false ,
            date: this.date,
            token: JSON.parse(localStorage.getItem('profile')).token,
          };
          this.CmdBarService
          .ajoutCmd(obj)
          .then((element: any) => { 
            console.log(element)
            console.log(this.commandes)    
            console.log(this.boissons)    

      })}
         
         this.dataSource = new MatTableDataSource<any>(this.commandes);
        this.dataSource.paginator = this.paginator;
      });
      console.log(this.boissons)
      this.dataSource.paginator = this.paginator;
      

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
            if (element.key == this.libelle.key) {
              this.shareService.showMsg('Boisson déjà déclarée')
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
      boisson:this.commandes
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
