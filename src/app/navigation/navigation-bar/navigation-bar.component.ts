import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
 
})
export class NavigationBarComponent implements OnInit {
  items = [
    {
      title: "Acceuil",
      icon: "home",
      link: "./",
    },
    {
      title: "Boisson",
      icon: "glass-martini",
      link: "./boisson",
    },
    {
      title: "Commande",
      icon: "shopping-basket",
      link: "./commande"
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
