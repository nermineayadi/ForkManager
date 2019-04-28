import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyserveur'})
export class ServeurPipe implements PipeTransform {
    transform(array: any, action :string ): any {
       
        if (action=='') {
            return array ;
        }
        else if (action != '' && action != "Boissons"){
            return array.filter((item : any )=>{
                return item.payload.val().categorie.nomcategorie == action ;
            })
        }
        else {
           return array.filter((item)=>{
              return item.payload.val().classe.value == action ;
           })
        }
    }
}