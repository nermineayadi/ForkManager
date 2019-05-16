import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyIfamille'})
export class IsfamillePipe implements PipeTransform {
    transform(array: any , key: string): any {
  
           return array.filter((item)=>{
            //console.log(item.payload.val().famille);
               return item.famille.key == key;
           })
        }
    }