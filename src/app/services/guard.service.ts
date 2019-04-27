import { Injectable } from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  redirectUrl: any;
  constructor(
    private router: Router
   ) {}


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if(!localStorage.getItem('uid')){
      this.redirectUrl = state.url;
      this.router.navigate(['/login']);
      return false;
    }
    else{
      return true;
    }
  }
}
