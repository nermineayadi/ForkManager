import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropperComponent } from '../cropper/cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    declarations: [
        
        CropperComponent],
    imports: [ CommonModule ,ImageCropperModule],
    exports: [],
    providers: [],
    entryComponents:[CropperComponent],
})
export class InscriptionModule {}