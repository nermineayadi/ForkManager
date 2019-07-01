import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ShareService } from 'src/app/services/share.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'app-cmd-serveur',
    templateUrl: './commande-serveur.component.html',
    styleUrls: ['./commande-serveur.component.scss']
})
export class CmdServeurComponent implements OnInit {
    position:boolean=false
    detail:boolean=false

    lat: number = 35.896999;
    lng:number=10.587838;
    cmdGolf: any[];
    trous: any[];
    plats: any[] = [];
    boissons: any[] = [];

    cmdGolfL: any[] = [];
    cmdGolfN: any[] = [];
    dataSourceL: MatTableDataSource<any>;
    dataSourceN: MatTableDataSource<any>;
    dataSourceP: MatTableDataSource<any>;
    dataSourceB: MatTableDataSource<any>;



    displayedColumnsN: string[] = ['date', 'id', 'details', 'position', 'livrer'];
    displayedColumnsL: string[] = ['date', 'id', 'details', 'position'];
    displayedColumnsP: string[] = [ 'plat', 'qte'];
    displayedColumnsB: string[] = ['boisson', 'qte'];


    longitude : any
    latitude:any
    identifiant : any
    @ViewChild(MatPaginator) paginator: MatPaginator;


    constructor(private router: Router,
        public shareService: ShareService,
        private route: ActivatedRoute) {
        this.route.data.subscribe((data) => {
            this.cmdGolf = data.serveur.cmdGolf;
            this.trous = data.serveur.trous;
        })


        this.remplirDt();
    }
    remplirDt() {
        this.shareService.getCommandeGolf().subscribe((data) =>
            this.cmdGolf = data)
        this.cmdGolfL = [];
        this.cmdGolfN = [];
        this.cmdGolf.forEach(element => {
            if (element.payload.val().hasOwnProperty('livraison')) {
                this.cmdGolfL.push({ key: element.key, ...element.payload.val() })
            }
            else {
                this.cmdGolfN.push({ key: element.key, ...element.payload.val() })
            }

        });
        this.dataSourceP = new MatTableDataSource<any>(this.plats);
        this.dataSourceP.paginator = this.paginator;

        this.dataSourceB = new MatTableDataSource<any>(this.boissons);
        this.dataSourceB.paginator = this.paginator;
        console.log(this.cmdGolf)
        console.log(this.cmdGolfN)
        console.log(this.cmdGolfL)

        this.dataSourceL = new MatTableDataSource<any>(this.cmdGolfL);
        this.dataSourceL.paginator = this.paginator;
        this.dataSourceN = new MatTableDataSource<any>(this.cmdGolfN);
        this.dataSourceN.paginator = this.paginator;

    }
    Livrer(element) {
        this.position=false
        this.detail=false
        this.shareService.SetLivraison(element.key).then((data) => {
            this.remplirDt();
            this.shareService.showMsg('Commande passée à la livraison')
        })

    }
    openPosition(element: any) {
        this.position=true
        this.detail=false
        let loc=this.Localisation(element)
        this.longitude=loc.lng;
        this.latitude=loc.lat;
        this.identifiant=element.id
        console.log(this.longitude)
        console.log(this.latitude)

    }
    openDetail(element){
        this.boissons=[]
        this.plats=[]

        let plat
        let boisson
        this.position=false
        this.detail=true
        if(element.plats){
            element.plats.forEach((row)=>{
                this.shareService.getPlat(row.plat).snapshotChanges().subscribe((data:any)=>{
                    plat=data.payload.val().nomPlat
                    console.log(plat)
                    this.plats.push({plat : plat , qte : row.qte})

                })
            })
            console.log(this.plats)
        }
        if(element.boissons){
            element.boissons.forEach((row)=>{
               this.shareService.getBoisson(row.boisson).snapshotChanges().subscribe((data:any)=>{
                    boisson =data.payload.val().libelle
                    this.boissons.push({boisson : boisson , qte : row.qte})

                })
            })
            console.log(this.boissons)

        }
        this.dataSourceP = new MatTableDataSource<any>(this.plats);
        this.dataSourceP.paginator = this.paginator;

        this.dataSourceB = new MatTableDataSource<any>(this.boissons);
        this.dataSourceB.paginator = this.paginator;


    }
    ngOnInit(): void { }
    Localisation(element):any {
        let loc
        this.trous.forEach(trou => {
        
            if (trou.key == element.localisation.trou) {
              
                loc = trou.payload.val()
            }
        });
        return loc
    }
}
