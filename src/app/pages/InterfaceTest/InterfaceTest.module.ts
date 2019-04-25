import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FamillePipe } from 'src/app/pipes/famille.pipe';
import { SfamillePipe } from 'src/app/pipes/sfamille.pipe';
import { Famille_Pipe } from 'src/app/pipes/famille1.pipe';
import { InterfaceTestRoutingModule } from './InterfaceTest-routing.module';
import { InterfaceTestComponent } from './InterfaceTest.component';
import { MatangModule } from 'src/assets/matang.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
    declarations: [],
    imports: [ CommonModule,InterfaceTestRoutingModule ,MatangModule,FlexLayoutModule,PipesModule.forRoot()],
    exports: [],
    providers: [],
})
export class InterfaceTestModule {}