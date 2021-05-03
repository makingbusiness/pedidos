import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Detalle, Pedido } from '../Models/Pedido';

const url = environment.url_base

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor(private http:HttpClient) { }

  insertar_pedido(pedido:Pedido,detalle:Detalle[])
  {
      console.log('El pedido es ',pedido)
      console.log('El detalle es ',detalle)

      const envio = {
        "pedido": pedido,
        "detalle": detalle
      }

      console.log('Toy enviando ', envio)
      return this.http.post(`${url}insertar_pedido`, JSON.stringify(envio))
  }

  listar_pedidos(codigo:string)
  {
      return this.http.get(`${url}listar_pedidos/${codigo}`)
  }

  listar_detalle(codigo:string)
  {
      return this.http.get(`${url}listar_detalle_pedidos/${codigo}`);
  }
}
