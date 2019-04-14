import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CplatComponent } from 'src/app/modals/CrudPlat/CPlat/cplat.component';
import { SelectionModel } from '@angular/cdk/collections';
import { ActivatedRoute } from '@angular/router';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';

export interface Plats {
    plat: string;
    position: number;
    categorie: string;
    famille: string;
    sfamille:string;
  }
   
  //initialisations plats 

  const ELEMENT_DATA: Plats[] = [
    {position: 1, plat: 'soupe au poulet', categorie: "entrée", famille: 'soupe',sfamille:"frick"},
    {position: 2, plat: 'césar', categorie: "entrée", famille: 'salade',sfamille:"verte"},
    {position: 3, plat: 'marguerita', categorie: "suite" ,famille: 'pizza',sfamille:"moyenne"},
    {position: 4, plat: 'spaguetti fruit de mer', categorie: "suite", famille: 'pate',sfamille:"spaguetti"},
    {position: 5, plat: 'escalope panné ', categorie: "suite", famille: 'volaille',sfamille:"escalope"},
    {position: 6, plat: 'steak grillé', categorie: "suite", famille: 'viande',sfamille:"steak"},
    {position: 7, plat: 'cordon bleu', categorie: "suite", famille: 'volaille',sfamille:"escalope"},
    {position: 8, plat: 'napolitaine', categorie: "suite", famille: 'pizza',sfamille:"petite"},
    {position: 9, plat: 'sandwitch thon', categorie: "suite", famille: 'léger',sfamille:"sandwitch"},
    {position: 10, plat: 'salade de fruit', categorie: "dessert", famille: 'salade',sfamille:"fruit"},
  ];
  
  /**
   * @title Table with filtering
   */
  @Component({
    selector: 'app-plat-cuisine',
    styleUrls: ['./plat-cuisine.component.scss'],
    templateUrl: './plat-cuisine.component.html',
  })
  export class PlatCuisineComponent implements OnInit {
    plats : AngularFireList<any>
    dataSource = new MatTableDataSource();

    displayedColumns: string[] = ['select','position', 'plat', 'categorie', 'famille','sfamille','actions'];

    selection = new SelectionModel<Plats>(true, []);
    plat : any ; 
    
    constructor(public dialog: MatDialog, private route: ActivatedRoute,private db: AngularFireDatabase) {}


    @ViewChild(MatPaginator) paginator: MatPaginator;
    //pagination
    async ngOnInit() {
      var listePlat = [];
      this.plats = await this.db.list('plats');
      console.log(this.plats);
      await this.plats.snapshotChanges().subscribe(item => {
        item.forEach(element => {
          var y = element.payload.toJSON();
          console.log(y);
          listePlat.push(y);
        })

      this.dataSource = new MatTableDataSource(listePlat.reverse());
      this.dataSource.paginator = this.paginator;
      this.route.data.subscribe((data)=>{
      this.plat = data.plat;

      })
    })

    }
    openDialog(): void {
      const dialogRef = this.dialog.open(CplatComponent, {
        //taille du modal 
        data:this.plat
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }
    


      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }


    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle()
  {
      // this.isAllSelected() ?
      // this.selection.clear() :
      // this.dataSource.data.forEach(row  => this.selection.select(row.toJSON));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Plats): string
  {
      if (!row) {
          return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
      }
      return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  }