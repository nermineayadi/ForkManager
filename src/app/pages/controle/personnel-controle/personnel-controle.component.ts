import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
export interface Personnel {
    nom: string;
     id: number;
     prenom: string;
     mail: string;
     datenaiss: string;
     telephone: string;
     cin:string;
   }
    
   //initialisations plats 
   
   const ELEMENT_DATA: Personnel[] = [
     {id: 1, nom:'nermine',prenom: 'ayadi', mail:'nermine.ayadi15@gmail.com',datenaiss:'17/09/1996',telephone:"25684557",cin: "09854067"},
     {id: 2, nom:'mariem',prenom: 'chaieb', mail:'mariemch@gmail.com',datenaiss:'11/10/1997',telephone:"25684557",cin: "09854067"},
     {id: 3, nom:'sally',prenom: 'ayadi', mail:'sally.ayadi@gmail.com',datenaiss:'04/02/1995',telephone:"26862856",cin: "09854067"},
     {id: 4, nom:'ahmed',prenom: 'salah', mail:'ahmedsalah@gmail.com',datenaiss:'22/09/1996',telephone:"25684557",cin: "09854067"},
   ];
@Component({
    selector: 'app-personnel-controle',
    templateUrl: './personnel-controle.component.html',
    styleUrls: ['./personnel-controle.component.scss']
})
export class PersonnelControleComponent implements OnInit {
    displayedColumns: string[] = ['id', 'nom', 'prenom', 'mail','datenaiss','telephone','cin'];

    dataSource = new MatTableDataSource<Personnel >(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
 //pagination
 ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

    //filtrer

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
