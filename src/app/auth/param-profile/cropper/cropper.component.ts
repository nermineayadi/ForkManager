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
    public appService : ShareService,
    public dialogRef: MatDialogRef<CropperComponent>,
    @Inject(MAT_DIALOG_DATA) public file: any) { }

ngOnInit(): void { }
imageChangedEvent: any = '';
croppedImage: any = '';




fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
}
imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
}
imageLoaded() {
    // show cropper
}
loadImageFailed() {
    // show message
}
}
