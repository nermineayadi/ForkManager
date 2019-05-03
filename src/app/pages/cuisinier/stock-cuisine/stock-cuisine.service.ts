import { Injectable } from '@angular/core';
import { ShareService } from 'src/app/services/share.service';
import { AngularFireDatabase } from "@angular/fire/database";
import * as firebase from 'firebase';

ShareService
@Injectable()
export class StockCuisineService {
    constructor(private db: AngularFireDatabase ) {

    }


}