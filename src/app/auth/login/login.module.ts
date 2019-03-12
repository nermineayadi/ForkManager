import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';

@NgModule({
    declarations: [],
    imports: [ CommonModule ,NbAuthModule.forRoot({
        strategies: [
          NbPasswordAuthStrategy.setup({
            name: 'email',
          }),
        ],
        forms: {},
      }),  ],
    exports: [],
    providers: [],
})
export class LoginModule {}