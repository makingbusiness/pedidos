import { Component, OnInit,  Input } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CartService } from '../../services/cart.service';
import { Instancia } from '../../Models/Instancia';
import { Producto } from '../../Models/Producto';
import { Router } from "@angular/router";
import { environment } from '../../../environments/environment';
import { IonSlides, ToastController } from '@ionic/angular';
import { Carro } from '../../Models/Carro';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  lista: any[];
  producto: Producto[];
  productos: Producto[] = [];
  prod: Producto;
  pagina: string;
  segmentos: string[];
  rutaImg: string;
  nombreInstancia: string;
  instancias: Instancia[] = [];

  subcategoria = '';
  carrito: Carro;

  slideOpts = {
     slidesPerView: 2.3,
     grabCursor: true,
     freeMode: true
  }
  
    constructor(private productoService:ProductoService,private ruta: Router, public cartService: CartService, private toastController: ToastController) 
    {
        productoService.paginaActual = 0;
        this.segmentos = ruta.url.split('/');
        this.pagina = this.segmentos[this.segmentos.length-1];
    }

    ngOnInit(): void 
    {
        let codigo: string;

        console.log(this.ruta);
        this.cargarProductos();

        this.productoService.getInstancias('1',this.pagina).subscribe(cat => {
          this.instancias = cat['instancias'];
        });
    }

    detalleProducto(producto) 
    {
       this.ruta.navigate(['/productos/' + this.pagina + '/' + producto]);
    }

    mostrarCarro()
    {
       this.ruta.navigate(['/carro']);
    }

    cargarProductos(event?)
    {
        console.log('Cargando productos....')
        this.rutaImg = environment.url_imagenes;
        this.segmentos = this.ruta.url.split('/');

        if (this.subcategoria.length == 0)
        {
            this.productoService.getProductos(this.pagina).subscribe(datos => {

              this.producto = datos['productos'];

              if (this.producto)
              {
                if (this.producto.length == 0)
                {
                    event.target.disabled = true;
                    event.target.complete();
                    return;
                }

                this.productos.push(...this.producto);
              }
              else
              {
                console.log('No hay productos para',this.pagina);
              }

              if (event)
              {
                  event.target.complete();
              }
          },
          error => {
            console.log(error);
          });

        }
        else
        {
            this.productoService.getProductosInstancia(this.subcategoria).subscribe(datos => {

              this.producto = datos['productos'];

              if (this.producto)
              {
                if (this.producto.length == 0)
                {
                    event.target.disabled = true;
                    event.target.complete();
                    return;
                }

                this.productos.push(...this.producto);
              }

              if (event)
              {
                  event.target.complete();
              }
          },
          error => {
            console.log(error);
          });
        }

    }

    slideTap(item: Instancia){
        this.productos = [];
        this.pagina = item.CodInst.toString();
        this.subcategoria = item.CodInst.toString();
        this.cargarProductos();
    }

    async agregar(producto: Producto)
    {
        this.carrito = new Carro(producto.CodProd,
                                 producto.Descrip, 
                                 1,
                                 producto.Precio, 
                                 Math.round(producto.Precio*producto.Impuesto/100),
                                 producto.ImgPrincipal);
                                 
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
