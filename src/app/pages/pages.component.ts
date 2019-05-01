import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

   
    constructor(
        private router: Router,private afMessaging: AngularFireMessaging
    ) { 
        this.router.navigate([`/${localStorage.getItem('fonction')}`]);
    }

 
  
    ngOnInit() {
      this.requestPermission();
    }
  
    requestPermission() {
      this.afMessaging.requestPermission
        .pipe(mergeMapTo(this.afMessaging.tokenChanges))
        .subscribe(
          (token) => { console.log('Permission granted! Save to the server!', token); },
          (error) => { console.error(error); },  
        );
    }
}
