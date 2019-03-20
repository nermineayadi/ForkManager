import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-cplat',
    templateUrl: './cplat.component.html',
})
export class CplatComponent  implements OnInit{
   

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<CplatComponent>) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
   
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    
}



  
    