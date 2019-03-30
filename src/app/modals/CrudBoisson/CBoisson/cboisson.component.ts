import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
// import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cboisson',
  templateUrl: './cboisson.component.html',
 
})
export class CBoissonComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<CBoissonComponent>) {}
  ngOnInit() {
   
  }
   
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    

}
