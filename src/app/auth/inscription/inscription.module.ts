import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CropperComponent } from '../cropper/cropper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ProfileService } from './inscription.service';

@NgModule({
    declarations: [
        
        ],
    imports: [ CommonModule ,ImageCropperModule],
    exports: [],
    providers: [ProfileService],
    entryComponents:[],
})
export class InscriptionModule {}