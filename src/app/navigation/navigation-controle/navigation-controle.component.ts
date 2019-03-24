import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-navigation-controle",
  templateUrl: "./navigation-controle.component.html"
})
export class NavigationControleComponent implements OnInit {
  items = [
    {
      title: "Acceuil",
      icon: "home",
      link: "./",
    },
    {
      title: "Plats",
      icon: "utensils",
      link: "./plats",
    },
    {
      title: "Boissons",
      icon: "glass-martini",
      link: "./boissons",
    },
    {
      title: "Menus",
      icon: "book-open",
      link: "./menu"
    },
    {
      title: "Portions",
      icon: "balance-scale",
      link: "./portions"
    },
    {
      title: "Réservations",
      icon: "calendar",
      link: "./reservations"
    },
    {
      title: "Personnels",
      icon: "users",
      link: "./personnels"
    },
   ]
  constructor(private router: Router) {}

  ngOnInit(): void {}
  activeRoute(routename: string): boolean {
    return this.router.url.indexOf(routename) > -1;
  }
}
