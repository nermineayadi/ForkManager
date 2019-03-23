import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock-cuisine',
    templateUrl: './stock-cuisine.component.html',
    styleUrls: ['./stock-cuisine.component.scss']
})
export class StockCuisineComponent implements OnInit {

    displayedColumns: string[] = ['id', 'Ingredient', 'categorie', 'qantité','unité'];

    constructor() { }

    ngOnInit(): void { }
}
