import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-serveur',
  templateUrl: './serveur.component.html',
  styleUrls: ['./serveur.component.scss']
})
export class ServeurComponent implements OnInit {

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
