import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BoissonResponsableService } from '../../boisson-responsable.service';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-supprimerB',
  templateUrl: './supprimerB.component.html',
  styleUrls: ['./supprimerB.component.scss']
})
export class SupprimerBComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerBComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any,
    private boissonService : BoissonResponsableService,
    private shareService : ShareService) { 
      console.log(this.element);

    }
  ngOnInit() {

  }
  onDelete(){
    console.log(this.element.key);
    this.boissonService.supprimeBoisson(this.element.key).then(()=>{
      this.shareService.showMsg("Boisson supprimée");
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
