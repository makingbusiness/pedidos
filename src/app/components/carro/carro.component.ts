import { Component, OnInit, Input } from '@angular/core';
import { Carro } from '../../Models/Carro';
import { Producto } from '../../Models/Producto';
import { CartService } from '../../services/cart.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.scss'],
})
export class CarroComponent implements OnInit {
@Input() producto: Carro;
total:number;
carrito: Carro;
items;

  constructor(private cartService: CartService, private toastController: ToastController) { 
    this.total = 1;
  }

  ngOnInit() {
  }

  sumar()
  {
    this.total += 1;

    console.log('Sumando uno a ' + this.producto);
  }

  restar()
  {
    this.total -= 1;
    if (this.total == 0) this.total = 1;

    console.log('Restando uno a ' + this.producto);
  }

  cambiar(cantidad)
  {
    this.total = parseInt(cantidad);
  }

  async agregar()
  {
    this.carrito = new Carro(this.producto.CodProd,
                            this.producto.Descrip,
                            this.producto.Precio, 
                            this.total,
                            Math.round(this.producto.Precio*this.producto.Impuesto/100),
                            this.producto.ImgPrincipal);

    this.cartService.agregar(this.carrito);

    const toast = this.toastController.create({
      message: 'Producto agregado',
      duration: 500,
      position: 'bottom',
      color: 'dark'
    });

    (await toast).present();
  }

}
