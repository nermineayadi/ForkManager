import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-detail-s',
  templateUrl: './detail-s.component.html',
  styleUrls: ['./detail-s.component.scss']
})
export class DetailSComponent implements OnInit {
  ngOnInit(): void {

  }
  photo: string;

  //colonnes
  ingredientColumns: string[] = ['libelle', 'quantité', 'unité'];
  sousRecetteColumns: string[] = ['libelle', 'quantité'];

  srecette: any;
  constructor(public dialogRef: MatDialogRef<DetailSComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any) {
            this.srecette= payload;
            console.log(this.srecette.ingredient)
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
