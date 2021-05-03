import { Pipe, PipeTransform } from '@angular/core';
import { DetallePulso, Pulso } from '../Models/Pulso';
import { Producto } from '../Models/Producto';
import { environment } from '../../environments/environment';
import { Carro } from '../Models/Carro';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(producto: Producto | Carro): string 
  {
      let rutaImg = environment.url_imagenes;

      if (producto.Descrip.substring(0,5).toLowerCase() == 'pulso')
      {
          console.log('Buscando en imagen principal .... ', producto)
          if (!producto.ImgPrincipal.includes('-'))
          {
              return `${rutaImg}manilla/${producto.ImgPrincipal}`;
          }
          else
          {
              return `${rutaImg}manilla/adicionales/${producto.ImgPrincipal}`;
          }
      }
      else
      {
          return `${rutaImg}${producto.CodProd}.png`;
      }
  }
}
