import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbycategory'})
export class FamillePipe implements PipeTransform {
    transform(array: any, key:string ): any {
       
        if (!key) {
            return array ;
        }
        else {
           return array.filter((item)=>{
            //console.log(item.payload.val().categorie);
               return item.payload.val().categorie == key;
           })
        }
    }
}