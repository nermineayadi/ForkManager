import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu-cuisine',
    templateUrl: './menu-cuisine.component.html',
    styleUrls: ['./menu-cuisine.component.scss']
})
export class MenuCuisineComponent implements OnInit {
    item = [
        {
            title: 'E-commerce',
            icon: 'e-commerce',
            link: '',
            home: true,
          },
          {
            title: 'Home',
            icon: 'nb-home',
            link: '',
          }
    ]
    constructor() { }

    ngOnInit(): void { }
}
