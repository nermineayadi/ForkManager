import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

    displayedColumns: string[] = ['id', 'Ingredient', 'categorie', 'qantité','unité'];

    constructor() { }

    ngOnInit(): void { }
}
