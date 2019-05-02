import { Component, OnInit } from "@angular/core";
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: "app-responsable",
  templateUrl: "./responsable.component.html",
  styleUrls: ["./responsable.component.scss"]
})
export class ResponsableComponent implements OnInit {
   // constructor
  constructor(
    private afMessaging: AngularFireMessaging ,
    private shareService : ShareService
    ) 
    {}
    
  //onInit
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
        
      })
  }
}
