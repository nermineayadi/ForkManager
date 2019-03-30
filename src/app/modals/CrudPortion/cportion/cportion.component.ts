import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-cportion',
  templateUrl: './cportion.component.html',
})
export class CPortionComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CPortionComponent>) { }

  ngOnInit(): void { }
  onNoClick(): void {
      this.dialogRef.close();
    }

}
