import { Component, OnInit } from '@angular/core';
import {Login} from "../models/login";
@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

    loginInfo:Login = {
        first_name:'Andrew',
        last_name:'Yang',
        avatar:'ay.jpeg',
        title:'Senior Developer'
    };
    constructor() { }

    ngOnInit(): void { }
}
