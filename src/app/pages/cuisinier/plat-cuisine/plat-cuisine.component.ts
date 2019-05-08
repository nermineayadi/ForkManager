import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog, } from '@angular/material';
import { CplatComponent } from '../modals/CPlat/cplat.component';
import { ActivatedRoute } from '@angular/router';
import { DetailPComponent } from '../modals/detail-p/detail-p.component';
import { Plat } from 'src/app/srecette/plat.model';
import { ShareService } from 'src/app/services/share.service';

@Component({
  selector: 'app-plat-cuisine',
  styleUrls: ['./plat-cuisine.component.scss'],
  templateUrl: './plat-cuisine.component.html',
})
export class PlatCuisineComponent implements OnInit {
  // var
  plats: any[]=[];
  plat: any;
  dataSource: MatTableDataSource<Plat>;
  displayedColumns: string[] = [ 'plat', 'categorie', 'famille', 'sfamille', 'detail'];
 
 
  //pagination
  @ViewChild(MatPaginator) paginator: MatPaginator;

  // constructor
  constructor(public dialog: MatDialog,
              private route: ActivatedRoute,
              private shareservice : ShareService,
              ) 
              {}

   //onInit
   ngOnInit() {
    this.route.data.subscribe((data) => {
     // console.log(data)
      data.plat.plats.forEach(element => {
        this.plats.push({key : element.key , ...element.payload.val()})
      });
      //console.log(this.plats)
      this.dataSource = new MatTableDataSource<Plat>(this.plats);
      this.dataSource.filter = 'true';
     this.dataSource.paginator = this.paginator;
     this.plat = data.plat;
    })

  }
  
  openCplat(): void {
    const dialogRef = this.dialog.open(CplatComponent, {
      data: this.plat
    });   
    dialogRef.afterClosed().subscribe((result) => {
      if (result){
        this.plats.push(result);
        this.dataSource = new MatTableDataSource<Plat>(this.plats);
        this.dataSource.filter = 'true';
      }
      console.log( this.dataSource )
    //  console.log('The dialog was closed');
    });
  }
  openDetail(element : any) : void {
    if (element.hasOwnProperty("ingredient")){
      const dialogRef = this.dialog.open(DetailPComponent, {
        height: '400px',
        data: element
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    else {
      this.shareservice.showMsg("Ce plat n'est pas encore validé")
    }

  }



  applyFilter(filterValue: string) {
    if (filterValue==''){
      this.dataSource.filter = 'true';
    }else{
    this.dataSource.filter = filterValue.trim().toLowerCase() && 'true';}
  }





}