import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { PlatResponsableService } from '../../plat-responsable.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any,
    private platService : PlatResponsableService,
    private shareService : ShareService) { 
      console.log(this.element);

    }
  ngOnInit() {

  }
  onDelete(){
    console.log(this.element.key);
    this.platService.supprimePlat(this.element.key).then(()=>{
      this.shareService.showMsg("plat supprimé");
    })
    .catch(error => {
      console.error(error.message);
      this.shareService.showMsg(error.message)
    })
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
