import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-menu-cuisine",
  templateUrl: "./menu-cuisine.component.html",
  styleUrls: ["./menu-cuisine.component.scss"]
})
export class MenuCuisineComponent implements OnInit {
  item = [
    {
      title: "Acceuil",
      icon: "home",
      link: "/acceuil",
    },
    {
      title: "Plats",
      icon: "e-commerce",
      link: "/plats",
    },
    {
      title: "Menus",
      icon: "nb-home",
      link: "/menus"
    },
    {
      title: "Réservation",
      icon: "nb-home",
      link: "/reservation"
    },
    {
      title: "Commande",
      icon: "nb-home",
      link: "/commande"
    },
    {
      title: "Inventaire",
      icon: "nb-home",
      link: "/inventaire"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
