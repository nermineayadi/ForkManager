import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'filterbyIclasse'})
export class IfamillePipe implements PipeTransform {
    transform(array: any): any {
  
           return array.filter((item)=>{
            //console.log(item.payload.val().famille);
               return item.classe.nom == 'Nourriture';
           })
        }
    }
