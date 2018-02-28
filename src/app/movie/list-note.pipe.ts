import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'listNote'
})
export class ListNotePipe implements PipeTransform {

  transform(value: any): any {

      if (value == 1 ){
      return  '⭐';
    } else if (value == 2 ){
    return '⭐⭐';
      } else if (value==3) {
          return '⭐⭐⭐';
      } else if (value==4){
        return '⭐⭐⭐⭐';
      } else if (value==5){
        return '⭐⭐⭐⭐⭐'
      }
  }

}
