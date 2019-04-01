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
    page: number = 3;
    opened = false;
    onSerch = false;
    selectedItem: string ='' ;

    constructor(private router : Router,
        public shareService : ShareService) { }
    ngOnInit() { }
    onChange(topic : string ){
        this.selectedItem= topic ;
        this.router.navigate(['/pages'+topic]);
    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
        location.href='localhost:4200';
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
}

