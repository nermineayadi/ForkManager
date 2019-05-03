import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatTableDataSource } from '@angular/material';
import { DetailPService } from './detail-p.service';

@Component({
  selector: 'app-detail-p',
  templateUrl: './detail-p.component.html',
  styleUrls: ['./detail-p.component.scss']
})
export class DetailPComponent implements OnInit {

  ngOnInit(): void {

  }
  photo: string;
  //colonnes
  ingredientColumns: string[] = ['nom', 'quantité', 'unité'];
  sousRecetteColumns: string[] = ['nom', 'quantité', 'unité', 'voir'];
  etapeColumns: string[] = ['nom', 'description'];


  plat: any;
  constructor(public dialogRef: MatDialogRef<DetailPComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any, private detailpService: DetailPService) {
            this.plat= payload;
            }
   

  onNoClick(): void {
    this.dialogRef.close();
  }

}
