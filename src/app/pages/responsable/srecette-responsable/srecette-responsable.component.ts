
import { Component, OnInit, ViewChild } from '@angular/core';
    import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
    import { DetailSComponent } from './modals/detail-s/detail-s.component';
    import { SupprimerComponent } from './modals/supprimer/supprimer.component';
    import { SelectionModel } from '@angular/cdk/collections';
    import { ActivatedRoute } from '@angular/router';
    import { UplatComponent } from './modals/UPlat/uplat.component';
    import { CSrecetteComponent } from './modals/C-srecette/csrecette.component';
    import { ShareService } from 'src/app/services/share.service';
    import { Plat } from 'src/app/srecette/plat.model';
import { Srecette } from 'src/app/models/srecette.model';
@Component({
    selector: 'app-responsable-srecette',
    templateUrl: './srecette-responsable.component.html',
    styleUrls: ['./srecette-responsable.component.scss']
})
export class SrecettesResponsableComponent implements OnInit {
    
   
      srecettes: any[] = [];
      srecette: any;
      dataSource: MatTableDataSource<any>;
      displayedColumns: string[] = ['select', 'srecette','detail', 'actions'];
    
      //pagination
      @ViewChild(MatPaginator) paginator: MatPaginator;
    
    
      // constructor
      constructor(
        public dialog: MatDialog,
        private route: ActivatedRoute,
        private shareservice: ShareService,
      ) { }
    
      //onInit
      ngOnInit() {
        this.route.data.subscribe((data) => {
          console.log(data)
          data.srecette.srecettes.forEach(element => {
            this.srecettes.push({ key: element.key, ...element.payload.val() })
          });
          //console.log(this.srecettes)
    
          this.dataSource = new MatTableDataSource<Plat>(this.srecettes);
          this.dataSource.paginator = this.paginator;
          this.srecette = data.srecette;
    
        })
    
      }
      //modal ajout plat
      openCSRecette(): void {
        const dialogRef = this.dialog.open(CSrecetteComponent, {
          data: this.srecette
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.srecettes.push(result);
            this.dataSource = new MatTableDataSource<Srecette>(this.srecettes);
          }
          //console.log(this.dataSource)
         // console.log('The dialog was closed');
        });
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
      //modal supprime plat
      openSupprime(element : any): void {
        const dialogRef = this.dialog.open(SupprimerComponent, {
          data: element
        });
        dialogRef.afterClosed().subscribe(result => {
          this.shareservice.getSrecettes().subscribe(data => {
            //console.log(data)
            this.srecettes = [];
            data.forEach(element => {
              this.srecettes.push({ key: element.key, ...element.payload.val() })
            })
          //  console.log(this.srecettes)
            this.dataSource = new MatTableDataSource<Srecette>(this.srecettes);
          //  console.log('The dialog was closed');
          })
    
        })
      }
      //modal modifier plat
      openEdit(row: any): void {
        const dialogRef = this.dialog.open(UplatComponent, {
          data: { key: row.key, value: row, plat: this.srecette }
        });
    
        dialogRef.afterClosed().subscribe(result => {
          this.shareservice.getSrecettes().subscribe(data => {
            console.log(data)
            this.srecettes = [];
            data.forEach(element => {
              this.srecettes.push({ key: element.key, ...element.payload.val() })
            })
            console.log(this.srecettes)
            this.dataSource = new MatTableDataSource<Plat>(this.srecettes);
            console.log('The dialog was closed');
          })
    
        })
      }
    
    
      //filtrer
    
      applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
      }
    
      selection = new SelectionModel<any>(true, []);
      /** Whether the number of selected elements matches the total number of rows. */
      isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.length;
        return numSelected === numRows;
      }
    
      /** Selects all rows if they are not all selected; otherwise clear selection. */
      masterToggle() {
        this.isAllSelected() ?
          this.selection.clear() :
          this.dataSource.data.forEach(row => this.selection.select(row));
      }
    
      /** The label for the checkbox on the passed row */
      checkboxLabel(row?: any): string {
        if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
      }
    
    
      
}
