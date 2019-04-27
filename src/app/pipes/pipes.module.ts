import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamillePipe } from './famille.pipe';
import { Famille_Pipe } from './famille1.pipe';
import { SfamillePipe } from './sfamille.pipe';

@NgModule({
    declarations: [FamillePipe,Famille_Pipe,SfamillePipe],
    imports: [ CommonModule ],
    exports: [FamillePipe,Famille_Pipe,SfamillePipe],
    providers: [],
})
export class PipesModule {
    static forRoot() {
        return {
            ngModule: PipesModule,
            providers: [],
        };
}
}