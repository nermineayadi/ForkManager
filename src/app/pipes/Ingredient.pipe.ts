import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyIsfamille'})
export class IngredientPipe implements PipeTransform {
    transform(array: any , key: string): any {
  
           return array.filter((item)=>{
            //console.log(item.payload.val().famille);
               return item.sfamille.key == key;
           })
        }
    }