import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';


@NgModule({
    declarations: [PagesComponent,
        

    ],
    imports: [
        
        CommonModule,
        RouterModule,
        PagesRoutingModule  
     ],
    exports: [],
    providers: [],
})
export class PagesModule {}