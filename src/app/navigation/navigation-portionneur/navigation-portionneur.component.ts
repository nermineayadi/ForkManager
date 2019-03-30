import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navigation-portionneur',
    templateUrl: './navigation-portionneur.component.html',
})
export class NavigationPortionneurComponent implements OnInit {
    items = [
        {
          title: "Acceuil",
          icon: "home",
          link: "./",
        },
        
        
        
        {
          title: "Stock",
          icon: "box-open",
          link: "./stock"
        },
       
        {
          title: "Inventaire",
          icon: "archive",
          link: "./inventaire"
        }]
      constructor(private router: Router) { }
    
      ngOnInit() {
      }
      activeRoute(routename: string): boolean {
        return this.router.url.indexOf(routename) > -1;
      }
}
