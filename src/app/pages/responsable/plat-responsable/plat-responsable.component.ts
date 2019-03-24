import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource,MatPaginator, MatDialog} from '@angular/material';
import { CplatComponent } from 'src/app/modals/CrudPlat/CPlat/cplat.component';
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
    selector: 'app-plat-responsable',
    styleUrls: ['./plat-responsable.component.scss'],
    templateUrl: './plat-responsable.component.html',
  })
  export class PlatResponsableComponent implements OnInit {
    displayedColumns: string[] = ['position', 'plat', 'categorie', 'famille','sfamille'];

    dataSource = new MatTableDataSource<Plats>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    constructor(public dialog: MatDialog) {}
    openDialog(): void {
      const dialogRef = this.dialog.open(CplatComponent, {
        //taille du modal 
        width: '900px',
        data:{ }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // this.animal = result;
      });
    }
    //pagination
    ngOnInit() {
      this.dataSource.paginator = this.paginator;
    }

      //filtrer

    applyFilter(filterValue: string) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }