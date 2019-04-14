import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerComponent>) {}
  ngOnInit() {
   
  }
   
    
      onNoClick(): void {
        this.dialogRef.close();
      }

}
