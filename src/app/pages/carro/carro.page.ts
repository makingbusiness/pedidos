import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CartService} from '../../services/cart.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Carro } from 'src/app/Models/Carro';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  items;
  rutaImg: string;
  total:  number;

  constructor(private router: Router,private cartService: CartService, private usuarioService:UsuarioService) { 
     this.rutaImg = environment.url_imagenes;
     console.log('Constructor del carrito');
  }

  ngOnInit() {
    console.log(this.cartService.carroCompras);
    if (this.cartService.carroCompras == undefined) this.router.navigate(['/instancias']);
    this.items =  this.cartService.carroCompras;
  }

  vaciarCarro()
  {
    console.log('Vaciando carro...');
    this.cartService.limpiarCarro();
    this.router.navigate(['/instancias']);
  }

  irInicio()
  {
     this.router.navigate(['/instancias']);
  }

  eliminar(codigo: string)
  {
    console.log("tchüss!! ", codigo)
    this.cartService.carroCompras = this.cartService.carroCompras.filter(s => s.CodProd != codigo);
    this.items = this.cartService.carroCompras;

    if (this.cartService.carroCompras.length == 0)
    {
      this.router.navigate(['/instancias']);
    }
  }

  continuar()
  {
    //console.log('Completando pedido de ', this.usuarioService.usuarioActivo)
    if (this.usuarioService.usuarioActivo.CodClie.length == 0)
    {
        this.router.navigateByUrl('ingreso')
    }
    else
    {
        this.router.navigate(['usuario', 2])
    }
  }

  sumar(item:Carro)
  {
    console.log('Cambiando...', item)
    item.Cantidad += 1
    this.total += 1;
    console.log('Sumando')
  }

  restar(item:Carro)
  {
    console.log('Cambiando...', item)
    this.total -= 1;
    item.Cantidad -= 1

    if (item.Cantidad < 1) item.Cantidad = 1
    
    if (this.total == 0) this.total = 1;
    console.log('Restando')
  }

  cambiar(cantidad)
  {
    this.total = parseInt(cantidad);
  }
}
