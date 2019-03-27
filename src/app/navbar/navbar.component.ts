import { Component, OnInit } from '@angular/core';
import {smoothlyMenu} from "../app.helpers";
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls:['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    page: number = 3;
    opened = false;
    onSerch = false;
    ngOnInit() { }
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
