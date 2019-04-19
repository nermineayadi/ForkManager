import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder } from '@angular/forms';
import { PlatService } from '../../plat-cuisine/plat.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerComponent>,
    @Inject(MAT_DIALOG_DATA) public key: string,
    private platService : PlatService) { }
  ngOnInit() {

  }
  onDelete(){
    console.log(this.key);
    this.platService.supprimePlat(this.key).then(()=>{
      this.platService.showMsg("plat supprimé");
    })
    .catch(error => {
      console.error(error.message);
      this.platService.showMsg(error.message)
    })
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
