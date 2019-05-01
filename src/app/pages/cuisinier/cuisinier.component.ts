import { Component, OnInit } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';



@Component({
  selector: 'app-cuisinier',
  templateUrl: './cuisinier.component.html',
  styleUrls: ['./cuisinier.component.scss']
})
export class CuisinierComponent implements OnInit {

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
