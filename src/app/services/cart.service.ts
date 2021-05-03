import { Injectable } from '@angular/core';
import { Carro } from '../Models/Carro';

@Injectable({
  providedIn: 'root'
})
export class CartService {
carroCompras: Carro[] = [];

  constructor() { }

  agregar(item)
  {
     this.carroCompras.push(item);
     console.log('Total productos en carro: ' + this.carroCompras.length);
  }

  getCarro()
  {
    console.log('Total items en carro: ' + this.carroCompras.length);
     return this.carroCompras;
  }

  limpiarCarro()
  {
    this.carroCompras = [];
    return this.carroCompras;
  }
}
