import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'redondeo'
})
export class RedondeoPipe implements PipeTransform {

  transform(valor: number): number
  {
      return Math.round(valor);
  }

}
