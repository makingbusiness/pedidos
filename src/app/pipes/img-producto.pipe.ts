import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'imgProducto'
})
export class ImgProductoPipe implements PipeTransform {

  transform(codigo: string): string {
    let rutaImg = environment.url_imagenes;

    console.log('Pipe ', codigo)
    if (!codigo.includes('.png'))
    {
      codigo += '.png'
    }

    return `${rutaImg}${codigo}`;
  }

}
