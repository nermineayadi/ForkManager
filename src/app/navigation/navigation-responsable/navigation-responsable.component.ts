import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navigation-responsable",
  templateUrl: "./navigation-responsable.component.html"
})
export class NavigationResponsableComponent implements OnInit {
  items = [
    {
      title: "Acceuil",
      icon: "home",
      link: "./acceuil",
    },
    {
      title: "Plats",
      icon: "utensils",
      link: "./plats",
    },
    {
      title: "Boissons",
      icon: "glass-martini",
      link: "./boisson",
    },
    {
      title: "Menus",
      icon: "book-open",
      link: "./menu"
    },
    {
      title: "Portions",
      icon: "balance-scale",
      link: "./portion"
    },
    {
      title: "Réservations",
      icon: "calendar",
      link: "./reservation"
    },
    {
      title: "Personnels",
      icon: "users",
      link: "./personnel"
    },
    {
      title: "Inventaire",
      icon: "archive",
      link: "./inventaire"
    }]
  constructor(private router: Router) {}

  ngOnInit(): void {}
  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
