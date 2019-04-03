import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ShareService } from 'src/app/services/share.service';
@Component({
  selector: 'app-inventaire-b',
  templateUrl: './inventaire-b.component.html',
  styleUrls: ['./inventaire-b.component.scss']
})
export class InventaireBComponent implements OnInit {

  
   
  myControl = new FormControl();
  options1: string[] = ['becks', 'celtia', 'vodka'];
  options2: string[] = ['vin ', 'bière', 'liqueur'];
  filteredOptions1: Observable<string[]>;
  filteredOptions2: Observable<string[]>;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  
    
  constructor(private _formBuilder: FormBuilder, public dialogRef: MatDialogRef<InventaireBComponent >,private shareService: ShareService) {}
  
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
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.filteredOptions1 = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value1 => this._filter1(value1))
    );
    this.filteredOptions2 = this.myControl.valueChanges
    .pipe(
      startWith(''),
      map(value2=> this._filter2(value2))
    );
  }
     public _filter1(value1: string): string[] {
    const filterValue1 = value1.toLowerCase();

    return this.options1.filter(option1 => option1.toLowerCase().includes(filterValue1));}
     public _filter2(value2: string): string[] {
      const filterValue2 = value2.toLowerCase();
  
      return this.options2.filter(option2=> option2.toLowerCase().includes(filterValue2));
  }

  

    
      onNoClick(): void {
        this.dialogRef.close();
      }
}
