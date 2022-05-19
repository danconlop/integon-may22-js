import { Pipe, PipeTransform } from '@angular/core';
import { Persona } from '../interfaces/persona';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Persona[], args: string, order: string): Persona[] {
    if(value) {
      return value.sort((a:Persona, b:Persona) => {
        if(a[args] < b[args]){
          return order === 'asc' ? -1 : 1;
        }
        else if(b[args] < a[args]){
          return order === 'asc' ? 1 : -1;;
        }
        return 0;
      });
    }
  }

}
