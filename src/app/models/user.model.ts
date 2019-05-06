export class User{
    // '?' attribut optionnel
    email? : string ;
    nom? : string = '';
    prenom ? : string ='' ;
    avatar? : string ='';
    telephone ? : number ;
    dateNaiss ? : Date;
    adresse? : string = '';
    ville? : string = '';
    codePostal ? : number =0 ;
    fonction? : string = '';
    token?:string='';
    responsable:string='';

}