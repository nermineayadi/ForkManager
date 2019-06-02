import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { Boisson } from 'src/app/models/boisson.model';


 
@Component({
    selector: 'app-boisson-bar',
    templateUrl: './boisson-bar.component.html',
    styleUrls: ['./boisson-bar.component.scss']
})
export class BoissonBarComponent implements OnInit {
   //var
  boissons: any[] = [];
  boisson: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [ 'code', 'boisson', 'classe', 'famille', 'sfamille' , 'prix', 'actions'];

  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;


  // constructor
  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private shareservice: ShareService  ) { }

  //onInit
  ngOnInit() {
    this.route.data.subscribe((data) => {
      console.log(data)
      data.boisson.boissons.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
      });
      console.log(this.boissons)
      this.dataSource = new MatTableDataSource<Boisson>(this.boissons);
      this.dataSource.paginator = this.paginator;
      this.boisson = data.boisson;

    })

  }



      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

   
   getBoissons(){
    this.shareservice.getBoissons().subscribe(data => {
      console.log(data)
      this.boissons = [];
      data.forEach(element => {
        this.boissons.push({ key: element.key, ...element.payload.val() })
      })
      console.log(this.boissons)
      this.dataSource = new MatTableDataSource<Boisson>(this.boissons);
      console.log('The dialog was closed');
    })
   }
}
