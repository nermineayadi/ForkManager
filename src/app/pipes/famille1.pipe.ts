import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyclasse'})
export class Famille_Pipe implements PipeTransform {
    transform(array: any, key:string ): any {
       
        if (!key) {
            return array ;
        }
        else {
           return array.filter((item)=>{
            //console.log(item.payload.val().classe);
               return item.payload.val().classe == key;
           })
        }
    }
}