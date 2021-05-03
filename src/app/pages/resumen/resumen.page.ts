import { Component, OnInit } from '@angular/core';
import { Detalle, Pedido } from 'src/app/Models/Pedido';
import { CartService } from 'src/app/services/cart.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.page.html',
  styleUrls: ['./resumen.page.scss'],
})
export class ResumenPage implements OnInit {
  
  guardando:boolean = true

  constructor(private cartService:CartService,
              private pedidoService:PedidoService,
              private usuarioService:UsuarioService) { }

  ngOnInit() {
      this.guardarPedido()
  }

  guardarPedido()
  {
      const usuario = this.usuarioService.usuarioActivo

      const detallePedido:Detalle[] = []

      let detalle:Detalle = null

      let total = 0
      let impuesto = 0

      this.cartService.getCarro().map(c => {

        total += Number(c.Precio)
        impuesto += Number(c.Impuesto)

        detalle = {
          Cantidad: c.Cantidad,
          CodProd: c.CodProd,
          Descripcion: c.Descrip,
          Impuesto: c.Impuesto,
          Valor: c.Precio
        }

        detallePedido.push(detalle)
      })

      const pedido:Pedido = {
        Ciudad: usuario.Ciudad,
        CodClie: usuario.CodClie,
        Direccion: usuario.Direccion,
        Email: usuario.Email,
        Estado: usuario.Estado,
        EstadoPedido: 0,
        Fecha: new Date(),
        Impuesto: impuesto,
        Observaciones: '',
        Pais: usuario.Pais,
        Telefono: usuario.Telefono,
        Valor: total
      }


      console.log('Guardando pedido....')
      this.pedidoService.insertar_pedido(pedido,detallePedido).subscribe(p => {

        console.log(p)
        this.guardando = false
      })
  }

}
