import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'app-ccmd',
    templateUrl: './ccmd.component.html',
})
export class CCmdComponent implements OnInit {
    unites: string[] = ['g', 'ml', 'portion']
    categories: string[] = ['entree', 'ml', 'portion']
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    ingredient: FormGroup;
    ngOnInit(): void {

        console.log(this.payload);

        this.ingredient = this._formBuilder.group({
            quantite: ['', Validators.required],
            unite: ['', Validators.required],
            ingredient: ['', Validators.required]
        });
    }
    //formGroups
    
    nbparts: FormGroup;

    //constructeur
    ingredients = new FormControl('', Validators.required);
    category = new FormControl('', Validators.required);
    nbpart = new FormControl('', Validators.required);
    date = new FormControl('', Validators.required);
    unite = new FormControl('', Validators.required);
    quantite = new FormControl('', Validators.required);
    constructor(private _formBuilder: FormBuilder,
        public dialogRef: MatDialogRef<CCmdComponent>,
        @Inject(MAT_DIALOG_DATA) public payload: any) { }


}


