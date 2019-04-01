import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParamProfileComponent } from './param-profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CropperComponent } from './cropper/cropper.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
    declarations: [ParamProfileComponent, CropperComponent],
    imports: [ImageCropperModule ,CommonModule, 
        // ParamProfileRoutingModule,
        MatCardModule,MatInputModule,MatCheckboxModule,MatIconModule,MatButtonModule,FlexLayoutModule,MatDialogModule],
    exports: [],
    providers: [],
    entryComponents:[CropperComponent],
})
export class ParamProfileModule {}