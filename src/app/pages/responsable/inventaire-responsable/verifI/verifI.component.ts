import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { VerifIService } from './verifI.service';

@Component({
  selector: 'app-verifI',
  templateUrl: './verifI.component.html',
  styleUrls: ['./verifI.component.scss']
})
export class VerifIComponent implements OnInit {
  date = new Date().toLocaleDateString();

  ngOnInit(): void {

  }
  photo: string;

  //colonnes
  ingredientColumns: string[] = ['libelle', 'unité', 'Qte Estimée','Qte réelle','Ecart' ,'commentaire'];
  dataSource = new MatTableDataSource<any>();

  inventaire: any[]=[];
  constructor(public dialogRef: MatDialogRef<VerifIComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any) {
      
            this.inventaire= payload.inventaire.boisson;
            console.log(this.inventaire);
            // if(this.inventaire.hasOwnProperty('ingredient'))
            this.dataSource = new MatTableDataSource<any>(this.inventaire);
            console.log(this.dataSource.data)

    }
    onVerif(){}

  onNoClick(): void {
    this.dialogRef.close();
  }
  getQteEstime(key:string) : Number{
    return 20 ;
  }
  getEcart(QR : number,QS : number) : number{
return QR-QS;
  }

}
