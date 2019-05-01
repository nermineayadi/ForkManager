import { Component, OnInit } from "@angular/core";
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';

@Component({
  selector: "app-responsable",
  templateUrl: "./responsable.component.html",
  styleUrls: ["./responsable.component.scss"]
})
export class ResponsableComponent implements OnInit {

  constructor(private afMessaging: AngularFireMessaging) {

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
