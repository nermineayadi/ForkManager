import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    declarations: [],
    imports: [ CommonModule ,
    FlexLayoutModule ],
    exports: [],
    providers: [LoginService],
})
export class LoginModule {}