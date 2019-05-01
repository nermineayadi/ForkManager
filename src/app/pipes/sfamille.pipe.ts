import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyfamille'})
export class SfamillePipe implements PipeTransform {
    transform(array: any, key:string ): any {
       
        if (!key) {
            return array ;
        }
        else {
           return array.filter((item)=>{
            //console.log(item.payload.val().famille);
               return item.payload.val().famille == key;
           })
        }
    }
}