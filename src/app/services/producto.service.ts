import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment} from "../../environments/environment";
import { Instancia } from '../Models/Instancia';

import { map } from 'rxjs/operators';
import { Producto } from '../Models/Producto';
import { DetallePulso, Pulso } from '../Models/Pulso';

const url = environment.url_base

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  paginaActual = 0;
  private instanciaActual = '';
  private subActual = '';

  instancias: Instancia[] = [
    {
      CodInst: 1405,
      Descrip: 'Relojes'
    },
    {
      CodInst: 954,
      Descrip: 'Pulsos'
    },
    {
      CodInst: 956,
      Descrip: 'Baterias'
    },
    {
      CodInst: 957,
      Descrip: 'Calculadoras'
    },
    {
      CodInst: 896,
      Descrip: 'Herramientas'
    },
  ];

  constructor(private http:HttpClient) { }

  getProductosInstancia(pagina)
  {
      if (this.instanciaActual == pagina )
      {
        this.paginaActual++;
      }
      else
      {
        this.paginaActual = 1;
        this.instanciaActual = pagina;
      }
      
      return this.http.get<Producto>(`${url}productosInstancia/${pagina }/${this.paginaActual}`);
  }

  getProductos(pagina)
  {
      console.log('Desde el servicio')
      if (this.instanciaActual == pagina)
      {
        this.paginaActual++;
      }
      else
      {
        this.paginaActual = 1;
        this.instanciaActual = pagina;
      }

      return this.http.get<Producto>(`${url}productos/${pagina}/0/${this.paginaActual}`);
  }  

  getProducto(pagina,codigo)
  {
    return this.http.get<Producto>(`${url}/producto/${codigo}`);
  }

  getPulsos(pagina)
  {
      if (this.instanciaActual == pagina)
      {
        this.paginaActual++;
      }
      else
      {
        this.paginaActual = 1;
        this.instanciaActual = pagina;
      }

      return this.http.get<Pulso>(`${url}pulsos/${pagina}/${this.paginaActual}`);
  }

  getPulso(codigo: string)
  {
      return this.http.get<DetallePulso>(`${url}consulta_pulso_app/${codigo}`);
  }

  getPulsosBase(codigo: string)
  {
      return this.http.get<DetallePulso[]>(`${url}lista_pulsos_base/${codigo}`);
  }

  getInstancias(idioma: string, padre: string)
  {
      return this.http.get<Instancia>(`${url}instancias/${idioma}/${padre}`);
  }

  getInstancia(idioma: string, codinst: string)
  {
      return this.http.get<Instancia>(`${url}instancia/${idioma}/${ codinst }`);
  }
}
