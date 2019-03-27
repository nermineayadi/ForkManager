import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
@Component({
    selector: 'app-ccmd',
    templateUrl: './ccmd.component.html',
})
export class CCmdComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<CCmdComponent>) { }

    ngOnInit(): void { }
    onNoClick(): void {
        this.dialogRef.close();
      }
}
