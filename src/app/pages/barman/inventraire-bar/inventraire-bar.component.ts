import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { InventaireBService } from 'src/app/modals/CrudIventaire/InventaireB/InventaireB.service';
import { InventaireBComponent } from 'src/app/modals/CrudIventaire/InventaireB/InventaireB.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inventraire-bar',
  templateUrl: './inventraire-bar.component.html',
  styleUrls: ['./inventraire-bar.component.scss']
})
export class InventraireBarComponent implements OnInit {
  displayedColumns: string[] = ['code','boisson','quantite','unite'];  
  date = new Date().toLocaleDateString();
  inventaire : any[]=[];
  boissons: any[] = [
    {libelle: '', quantite: '' , unite: '' }
  ];
  inv:any;
  invToday:any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
dataSource: any;


  constructor(public dialog: MatDialog,
    private route: ActivatedRoute,
    private shareservice : ShareService,
    private inventaireBService : InventaireBService,
    private location: Location) {
      route.data.subscribe((data) => {console.log(data)})
    }

    ngOnInit() {
      this.route.data.subscribe((data) => {
         data.inventaire.inventairesBar.forEach(element => {
           if (element.payload.val().date == this.date){
 
             this.invToday= element.key;
           this.inventaire.push(...element.payload.val().boisson)}
         });
         if(!this.invToday){
          const obj = {
            valid :false ,
            date: this.date,
            uid: localStorage.getItem('uid'),
          };
          this.inventaireBService
          .ajoutInventaire(obj)
          .then((element: any) => { 
            this.invToday= element.key;
          })
         }
         this.dataSource = new MatTableDataSource<any>(this.inventaire);
        this.dataSource.paginator = this.paginator;
        this.inv= data.inventaire
       })
        console.log(this.inventaire)     
}
  openDialog(): void {
    const dialogRef = this.dialog.open(InventaireBComponent , {
      //taille du modal 
      maxWidth: '600px',
      data:{ inventaire :this.inv , today : this.inventaire , invToday:this.invToday}
    });
    
    dialogRef.afterClosed().subscribe(result => {
     
      this.shareservice.getInventairesBar().subscribe((data) => {
        this.inventaire=[]
        data.forEach((element : any) => {
          if (element.payload.val().date == this.date){
            console.log('item' + element.payload.val().date)
            console.log('date'+ this.date)
            console.log(element.payload.val().boisson)
            this.invToday= element.key;
          this.inventaire.push(...element.payload.val().boisson)}
        });
        this.dataSource = new MatTableDataSource<any>(this.inventaire);
       this.dataSource.paginator = this.paginator;
      })
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase() 
  }
  cancel() {
    this.location.back(); // <-- go back to previous location on cancel
  }
}