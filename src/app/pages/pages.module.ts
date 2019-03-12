import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { NbSidebarModule, NbLayoutModule, NbSidebarService } from '@nebular/theme';
import { PagesComponent } from './pages.component';

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        RouterModule,
        NbSidebarModule,
        NbLayoutModule,
        NbSidebarService
     ],
    exports: [],
    providers: [NbSidebarService],
})
export class PagesModule {}