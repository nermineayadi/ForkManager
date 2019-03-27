import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-acceuil-cuisine",
  templateUrl: "./acceuil-cuisine.component.html",
  styleUrls: ["./acceuil-cuisine.component.scss"]
})
export class AcceuilCuisineComponent implements OnInit {
  items: any[] = [
    {
      title: "Ajouter vos recette",
      text: "c'est toujours plus facile quand c'est automatique !",
      img: "../../../../assets/plat/recette.jpg",
      alt: "recette"
    },
    {
      title: "plat",
      text: "c'est toujours plus facile quand c'est automatique !",
      img: "../../../../assets/plat/cc.jpg",
      alt: "recette"
    }
  ];
  constructor() {}

  ngOnInit(): void {}
}
