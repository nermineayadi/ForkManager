import { Component, OnInit } from '@angular/core';
import {smoothlyMenu} from "../app.helpers";
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

    ngOnInit() { }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
        // location.href='http://to_login_page';
    }
}
