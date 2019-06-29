import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { ShareService } from '../services/share.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

   
    constructor
    (
        private router: Router,private afMessaging: AngularFireMessaging,
        private shareService : ShareService
    ) 
    { 
        this.router.navigate([`/${localStorage.getItem('fonction')}`]);
    }

 
  
    //onInit
  ngOnInit() {
    this.requestPermission();
  }
  uid = localStorage.getItem('uid');

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { 
          // console.log('Permission granted! Save to the server!', token);
          this.shareService.updateToken(token,this.uid).then(()=>{
            this.receiveMessage()
          })
          localStorage.setItem('token',token);  
        },
        (error) => { console.error(error); },  
      );
  }
  receiveMessage() {
    this.afMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.shareService.notifications.push(payload)
      })
  }
}
