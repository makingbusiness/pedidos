import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad, Estado, Pais } from 'src/app/Models/Geografia';
import { Detalle, Pedido } from 'src/app/Models/Pedido';
import { Usuario } from 'src/app/Models/Usuario';
import { CartService } from 'src/app/services/cart.service';
import { PedidoService } from 'src/app/services/pedido.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VariosService } from 'src/app/services/varios.service';
import { environment } from 'src/environments/environment';

const rutaImagenes = environment.url_imagenes

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

    enlaces = [
    {
      id: 0,
      titulo: 'Mi cuenta',
      enlace: '/miCuenta'
    },
    {
      id: 1,
      titulo: 'Mis pedidos',
      enlace: '/misPedidos'
    },
    {
      id: 2,
      titulo: 'Direcciones de envio',
      enlace: 'Mis direcciones'
    },
    {
      id: 3,
      titulo: 'Cambiar clave',
      enlace: 'Cambio clave'
    }
  ];
  
  opcion:number = 0

  segmentos:string[] = []

  slideOpts = {
    slidesPerView: 2.3,
    grabCursor: true,
    freeMode: true
 }

  usuario:Usuario

  pais:Pais
  estado:Estado
  ciudad:Ciudad
  listaPaises:Pais[] = []
  listaEstados:Estado[] = []
  listaCiudades:Ciudad[] = []
  listaPedidos:Pedido[] = []
  listaDetalle:Detalle[] = []
  detallePedido:Detalle[] = []
  ruta:string
  numeroPedido:number

  valorItem:number
  
  constructor(private usuarioService:UsuarioService, 
              public variosService:VariosService,
              private pedidoService:PedidoService,
              private router:Router,
              public cartService:CartService) 
  {
    this.usuario = this.usuarioService.usuarioActivo

    this.listaPaises = variosService.listaPaises
    this.listaEstados = variosService.listaEstados
    this.listaCiudades = variosService.listaCiudades

    if (this.usuario.CodClie.length > 0)
    {
      pedidoService.listar_pedidos(this.usuario.CodClie).subscribe(p => {
        console.log(p)
        this.listaPedidos = p["pedidos"]
      })

      pedidoService.listar_detalle(this.usuario.CodClie).subscribe(d => {
        console.log(d)
        this.listaDetalle = d["detalle"]
      })
    }

    console.log(variosService.listaPaises,' ',this.usuario.Pais)
    this.pais = variosService.listaPaises.find(p => p.IDPais === this.usuario.Pais.toString())
    this.estado = variosService.listaEstados.find(e => e.IDEstado === this.usuario.Estado.toString())
    this.ciudad = variosService.listaCiudades.find(c => c.IDCiudad === this.usuario.Ciudad.toString())
  }
  
  ngOnInit() {
    this.opcion = 0
    console.log("Iniciando página de usuarios")
    this.opcion = this.enlaces[0].id

    this.segmentos = this.router.url.split('/')
    if (this.segmentos.length == 3) this.opcion = Number(this.segmentos[2])
  }

  guardar()
  {
      console.log(this.usuario)

      this.usuarioService.consulta_usuario(this.usuarioService.usuarioActivo.CodClie)
               .subscribe((u:any) => {

                 if (u.ok)
                 {
                    this.actualizar()
                 }
                 else 
                 {
                   this.usuarioService.insertar_usuario(this.usuario).subscribe(u => {
                     console.log(u)
             
                     this.usuarioService.usuarioActivo = this.usuario
                   })
                 }
               })

  }

  actualizar()
  {
      console.log(this.usuario)
      this.usuarioService.actualizar_usuario(this.usuario).subscribe(u => {
        console.log(u)

        this.usuarioService.usuarioActivo = this.usuario
      })
  }

  finalizar()
  {
      this.router.navigateByUrl('resumen')
  }

  slideTap(id:number)
  {
      console.log(id)
      this.opcion = id
  }

  cambiarClave()
  {
    console.log('Clave: ', this.usuario.Clave + ' ' + this.usuario.CodClie)
    this.usuarioService.actualizar_clave(this.usuario).subscribe(u => console.log(u))
  }

  cambiarPais(pais:Pais)
  {
    console.log('País seleccionado: ', pais)
    this.pais = pais
    this.listaEstados = this.variosService.listaEstados.filter(e => e.IDPais == pais.IDPais)
  }

  cambiarEstado(estado:Estado)
  {
      console.log('Estado seleccionado ',estado)
      this.estado = estado
      this.listaCiudades = this.variosService.listaCiudades.filter(c => c.IDEstado == estado.IDEstado && c.IDPais == this.pais.IDPais)
  }

  cambiarCiudad(ciudad:Ciudad)
  {
      console.log('La ciudad seleccionada es ', ciudad, this.estado, this.pais)
  }

  mostrarDetalle(id:number)
  {
      console.log('Mostrando detalle del pedido ', id)
      this.numeroPedido = id
      this.opcion = 4
      this.ruta = rutaImagenes
      this.detallePedido = this.listaDetalle.filter(p => p.Pedido === id)
      console.log('Mostrando detalle  ', this.detallePedido)
  }
}
