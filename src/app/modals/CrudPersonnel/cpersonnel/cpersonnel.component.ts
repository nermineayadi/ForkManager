import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-cpersonnel',
  templateUrl: './cpersonnel.component.html',
  
})
export class CPersonnelComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  constructor(public dialogRef: MatDialogRef<CPersonnelComponent>) {}
  ngOnInit() {
   
  }
   
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    

}
