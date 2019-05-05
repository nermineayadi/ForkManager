import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { DPersonnelService } from './dpersonnel.service';

@Component({
  selector: 'app-dpersonnel',
  templateUrl: './dpersonnel.component.html',
  styleUrls: ['./dpersonnel.component.scss']
})
export class DPersonnelComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DPersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any,
    private dpersonnelService : DPersonnelService,
    private shareService : ShareService) { 
    //   console.log(this.element);

    }
  ngOnInit() {

  }
  onDelete(){
    // console.log(this.element.key);
    this.dpersonnelService.supprimePersonnel(this.element.key)
    .then(()=>{
      this.shareService.showMsg("Utilisateur supprimé");
    })
    .catch(error => {
    //   console.error(error.message);
      this.shareService.showMsg(error.message)
    })
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
