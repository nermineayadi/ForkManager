import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
export interface Ingredients {
  position: number;
  ingredient: string;
  quantite: number;
  unite: string;
}
const ELEMENT_DATA: any[] = [
  {position: 1, ingredient: 'Hydrogen', quantite: 1.0079, unite: 'H'},
  {position: 2, ingredient: 'Helium', quantite: 4.0026, unite: 'He'},
  {position: 3, ingredient: 'Lithium', quantite: 6.941, unite: 'Li'},
  {position: 4, ingredient: 'Beryllium', quantite: 9.0122, unite: 'Be'},

];
@Component({
    selector: 'app-cplat',
    templateUrl: './cplat.component.html',
})
export class CplatComponent  implements OnInit{
  displayedColumns: string[] = ['position', 'ingredient', 'quantité', 'unité'];
  dataSource = ELEMENT_DATA;


  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<CplatComponent>) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      ingredient: ['', Validators.required],
      quantite: ['', Validators.required],
      unite: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
    });
    this.thirdFormGroup = this._formBuilder.group({
    });
  }
   
    
      onNoClick(): void {
        this.dialogRef.close();
      }
    
}



  
    