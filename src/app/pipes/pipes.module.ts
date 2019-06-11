import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamillePipe } from './famille.pipe';
import { Famille_Pipe } from './famille1.pipe';
import { SfamillePipe } from './sfamille.pipe';
import { ServeurPipe } from './serveur.pipe';
import { ClientPipe } from './client.pipe';
import { IfamillePipe } from './Ifamille.pipe';
import { IngredientPipe } from './Ingredient.pipe';
import { IsfamillePipe } from './Isfamille.pipe';

@NgModule({
    declarations: [FamillePipe,Famille_Pipe,SfamillePipe,ServeurPipe,ClientPipe ,IfamillePipe ,IngredientPipe,IsfamillePipe ],
    imports: [ CommonModule ],
    exports: [FamillePipe,Famille_Pipe,SfamillePipe,ServeurPipe,ClientPipe ,IfamillePipe,IngredientPipe ,IsfamillePipe],
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