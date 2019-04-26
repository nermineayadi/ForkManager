import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
export interface Transaction {
  item: string;
  cost: number;
}

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss']
})
export class ServeurComponent implements OnInit {
  displayedColumns: string[] = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  page: number = 3;
    opened = false;
    onSerch = false;
    selectedItem: string ='' ;


  

    setSelectedPage(m: number): void{
        this.page = m;
    }

    toggleNotification(): void{
        this.opened = !this.opened;
    }

    toggleSearch(): void{
        this.onSerch = !this.onSerch;
    }
    constructor(private router: Router,public shareService : ShareService) { }

    ngOnInit() {
     
    }
    onchange(topic : string ){
      this.selectedItem= topic ;
      this.router.navigate(['/pages'+topic]);
  }
    activeRoute(routename: string): boolean {
      return this.router.url.indexOf(routename) > -1;
    }
}
