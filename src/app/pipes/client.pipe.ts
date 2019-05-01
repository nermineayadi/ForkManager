import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyclient'})
export class ClientPipe implements PipeTransform {
    transform(array: any, action :string ): any {
       
        if (action=='') {
            return array ;
        }
        else if (action != '' && action != "BOIS. NON ALCOOLISEES"){
            return array.filter((item : any )=>{
                return item.payload.val().famille.nomfamille == action ;
            })
        }
        else {
           return array.filter((item)=>{
              return item.payload.val().famille.nom == action ;
           })
        }
    }
}