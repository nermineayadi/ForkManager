import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  // styleUrls: ['./cropper.component.scss']
})
export class CropperComponent implements OnInit {

  constructor(
    public shareService : ShareService,
    public dialogRef: MatDialogRef<CropperComponent>,
    @Inject(MAT_DIALOG_DATA) public file: any) { }

ngOnInit(): void { console.log(this.file) }
imageChangedEvent: any = '';
    croppedImage: any = '';
    
    
    imageCropped(event: ImageCroppedEvent) {

        this.croppedImage = event.base64;
        this.shareService.setAvatar(this.croppedImage);
    }
    goBack(){
      this.dialogRef.close();
    }
  
    updateAvatar(){
      const file = this.dataURLtoFile(this.croppedImage, this.file.filename);
      this.shareService.uploadUserAvatar(file , localStorage.getItem('uid'));
    }
    dataURLtoFile(dataurl, filename) {
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
  }
  }
    