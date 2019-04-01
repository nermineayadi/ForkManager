import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { MatDialog } from '@angular/material';
import { CropperComponent } from './cropper/cropper.component';

@Component({
  selector: 'app-param-profile',
  templateUrl: './param-profile.component.html',
  styleUrls: ['./param-profile.component.scss']
})
export class ParamProfileComponent implements OnInit {
  avatar : string;
  constructor(public dialog: MatDialog, 
      public appService : ShareService, 
     ) { 

  }

  ngOnInit(): void {
      this.appService.getAvatar().subscribe((croppedImage)=>{
          this.avatar = croppedImage;
      })

   }
   
   openModel(e){
      const dialogRef = this.dialog.open(CropperComponent, {
          data: e,
          width:"400px"
        });
      }
      //quand je click j'ouvre la fenetre pour choisir mon avatar //
      onchange(evt){
          this.openModel(evt);

      }
}
