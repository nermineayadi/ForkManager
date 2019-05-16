import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';

import { DetailSComponent } from '../../responsable/srecette-responsable/modals/detail-s/detail-s.component';
import { Srecette } from 'src/app/models/srecette.model';
import { Location } from '@angular/common';


@Component({
    selector: 'app-cuisine-srecette-cuisine',
    templateUrl: './srecette-cuisine.component.html',
    styleUrls: ['./srecette-cuisine.component.scss']
})
export class SrecetteCuisineComponent implements OnInit {
    
   
    srecettes: any[] = [];
    srecette: any;
    dataSource: MatTableDataSource<any>;
    displayedColumns: string[] = ['srecette','detail'];
  
    //pagination
    @ViewChild(MatPaginator) paginator: MatPaginator;
  
  
    // constructor
    constructor(
      public dialog: MatDialog,
      private route: ActivatedRoute,
      private shareservice: ShareService,
      private location: Location

    ) { }
  
    //onInit
    ngOnInit() {
      this.route.data.subscribe((data) => {
        console.log(data)
        data.srecette.srecettes.forEach(element => {
          this.srecettes.push({ key: element.key, ...element.payload.val() })
        });
        //console.log(this.srecettes)
  
        this.dataSource = new MatTableDataSource<Srecette>(this.srecettes);
        this.dataSource.paginator = this.paginator;
        this.srecette = data.srecette;
  
      })
  
    }

 
    //modal detail plat
    openDetail(element: any): void {
      console.log(element);
      if (element.hasOwnProperty("ingredient")) {
        const dialogRef = this.dialog.open(DetailSComponent, {
          height: '400px',
          data: element
        });
  
        dialogRef.afterClosed().subscribe(result => {
         // console.log('The dialog was closed');
        });
      }
      else {
        this.shareservice.showMsg("Ce plat n'est pas encore validé")
      }
    }


  
  
    //filtrer
  
    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    cancel() {
        this.location.back(); // <-- go back to previous location on cancel
      }
}
