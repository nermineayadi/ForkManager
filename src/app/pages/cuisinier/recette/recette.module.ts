import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetteComponent } from './recette.component';
import {MatangModule  } from "../../../../assets/matang.module";

@NgModule({
    declarations: [RecetteComponent],
    imports: [ CommonModule ,MatangModule],
    exports: [],
    providers: [],
})
export class RecetteModule {}