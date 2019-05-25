import { Component, OnInit } from '@angular/core';
import {smoothlyMenu} from "../app.helpers";
import { ShareService } from '../services/share.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    // notifications : any [] = [];
    page: number = 3;
    opened = false;
    onSerch = false;
    date = new Date().toLocaleString();

    selectedItem: string ='' ;
    profile = JSON.parse(localStorage.getItem('profile'));
    constructor(private router : Router,
        public shareService : ShareService) { }
    ngOnInit() { }
    onChange(topic : string ){
        this.selectedItem= topic ;
        this.router.navigate([''+topic]);
    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['/login'])
    }
    setSelectedPage(m: number): void{
        this.page = m;
    }

    toggleNotification(): void{
        this.opened = !this.opened;
    }

    toggleSearch(): void{
        this.onSerch = !this.onSerch;
    }
    get ishidden(): boolean {
        return this.shareService.notifications.length == 0 ; 
    }
    get nbnotifications() : number {
        return this.shareService.notifications.length ; 
    }
    get notifications() : any[] {
        return this.shareService.notifications ; 
    }
}

