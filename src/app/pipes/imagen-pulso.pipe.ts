import { Pipe, PipeTransform } from '@angular/core';
import { Pulso } from '../Models/Pulso';

@Pipe({
  name: 'imagenPulso'
})
export class ImagenPulsoPipe implements PipeTransform {

  transform(pulso: Pulso): string
  {
      if (pulso.ImgPrincipal.includes('-'))
      {
          return `adicionales/${pulso.ImgPrincipal}`;
      }
      else
      {
          return `${pulso.ImgPrincipal}`;
      }
  }

}
