import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { ShareService } from 'src/app/services/share.service';



@Component({
  selector: 'app-cuisinier',
  templateUrl: './cuisinier.component.html',
  styleUrls: ['./cuisinier.component.scss']
})
export class CuisinierComponent implements OnInit {

  constructor(private afMessaging: AngularFireMessaging , private shareService : ShareService) {

  }

  ngOnInit() {
    this.requestPermission();
  }

  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { 
          console.log('Permission granted! Save to the server!', token);
          this.shareService.updateToken(token).then(()=>{
            this.receiveMessage()
          })
           
        },
        (error) => { console.error(error); },  
      );
  }
  receiveMessage() {
    this.afMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.shareService.notifications.push({title:payload['notification'].title, body:payload['notification'].body});
      })
  }
}
