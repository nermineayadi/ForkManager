import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { PlatResponsableService } from '../../../plat-responsable/plat-responsable.service';

@Component({
  selector: 'app-supprimer',
  templateUrl: './supprimer.component.html',
  styleUrls: ['./supprimer.component.scss']
})
export class SupprimerComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any,
    private srecetteService : PlatResponsableService,
    private shareService : ShareService) { 
      console.log(this.element);

    }
  ngOnInit() {

  }
  onDelete(){
    console.log(this.element.key);
    this.srecetteService.supprimePlat(this.element.key).then(()=>{
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
