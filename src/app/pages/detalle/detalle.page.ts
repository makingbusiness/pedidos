import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { CartService} from '../../services/cart.service';
import { Router } from '@angular/router';
import { Producto } from '../../Models/Producto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})

export class DetallePage implements OnInit {
segmentos: string[];
producto: Producto;
codigo: string;
descripcion: string;
precio: number;
ampliada: string;
listaProductos: string[] = [];
listaImagenes: string[] = []
rutaImg: string;
pagina: string;

slideOpts = {
  slidesPerView: 4,
  spaceBetween: 5
}

slideDetOpts = {
  speed: 400
};

constructor(private productoService: ProductoService,private ruta: Router,public cartService: CartService) { 
    this.segmentos = ruta.url.split('/');
    this.pagina = this.segmentos[this.segmentos.length-2];
    this.codigo = this.segmentos[this.segmentos.length-1];

  }

  ngOnInit() {

    this.consultaDetalle()
  }

  consultaDetalle() {
    this.listaImagenes = []

    this.productoService.getProducto(this.pagina,this.codigo).subscribe(prod => {
      console.log('Mostrando info de: ',prod);
        this.producto = prod;
        //this.codigo = this.producto.CodProd;
        this.descripcion = this.producto.Descrip;
        this.precio = Math.round(this.producto.Precio * (1 + this.producto.Impuesto /100));
        this.ampliada = this.producto.DescAmpliada.split('<br>').join('\n');

        if (this.producto.ListaProductos){
          this.listaProductos = this.producto.ListaProductos.split(',');
          this.listaProductos.unshift(this.codigo)
        }

        console.log('Productos relacionados ', this.listaProductos)

        console.log("Imagen", `${ environment.url_imagenes}${ this.producto.ImgPrincipal}`)
        
        this.rutaImg = `${ environment.url_imagenes}${ this.producto.ImgPrincipal}`;

        this.listaImagenes.push(this.rutaImg)

        if (this.producto.ImgAdicionales.length > 0){
          const partes:string[] =  this.producto.ImgAdicionales.split(';')
          partes.map(parte => {
            this.listaImagenes.push(`${ environment.url_imagenes}adicionales/${ parte}`)
          })
        }

        console.log('Imprimiendo .... ' + this.producto.Precio);
    });    
  }

  mostrarCarro()
  {
      this.ruta.navigate(['/carro']);
  }

  cambiarImagen(img: string){
    console.log('Cambiando ',img)
    this.codigo = img
    this.consultaDetalle()
  }

}