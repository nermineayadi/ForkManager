import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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
  sousRecetteColumns: string[] = ['nom', 'quantité', 'unité'];
  etapeColumns: string[] = ['nom', 'description'];

  plat: any;
  constructor(public dialogRef: MatDialogRef<DetailPComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any) {
            this.plat= payload;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
