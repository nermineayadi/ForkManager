import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { ShareService } from 'src/app/services/share.service';
import { AngularFireDatabase } from "@angular/fire/database";

ShareService
@Injectable()
export class CommandeService  {
    constructor(private db: AngularFireDatabase ) {
    }



}




