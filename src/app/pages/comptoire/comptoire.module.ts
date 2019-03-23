import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComptoireRoutingModule } from './comptoire-routing.module';
import { ComptoireComponent } from './comptoire.component';

@NgModule({
    declarations: [ComptoireComponent],
    imports: [ CommonModule ,ComptoireRoutingModule],
    exports: [],
    providers: [],
})
export class ComptoireModule {}