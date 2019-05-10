import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ShareService } from 'src/app/services/share.service';
import { CIngredientService } from '../CIngredient/cIngredient.service';
import { IngredientResponsableService } from '../../ingredient-responsable.service';

@Component({
  selector: 'app-supprimerI',
  templateUrl: './supprimerI.component.html',
  styleUrls: ['./supprimerI.component.scss']
})
export class SupprimerIComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<SupprimerIComponent>,
    @Inject(MAT_DIALOG_DATA) public element: any,
    private ingredientService : IngredientResponsableService,
    private shareService : ShareService) { 
      console.log(this.element);

    }
  ngOnInit() {

  }
  onDelete(){
    console.log(this.element.key);
    this.ingredientService.supprimeIngredient(this.element.key).then(()=>{
      this.shareService.showMsg("Ingredient supprimé");
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
