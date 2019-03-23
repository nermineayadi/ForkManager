import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControleRoutingModule } from './controle-routing.module';
import { ControleComponent } from './controle.component';

@NgModule({
    declarations: [ControleComponent],
    imports: [ CommonModule ,ControleRoutingModule],
    exports: [],
    providers: [],
})
export class ControleModule {}