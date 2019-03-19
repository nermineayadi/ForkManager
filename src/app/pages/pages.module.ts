import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { PagesComponent } from './pages.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { CuisinierComponent } from './cuisinier/cuisinier.component';

@NgModule({
    declarations: [PagesComponent,CuisinierComponent

    ],
    imports: [
        CommonModule,
        RouterModule,
       
        MatToolbarModule,
        SidebarModule,
        
     ],
    exports: [],
    providers: [],
})
export class PagesModule {}