import { Component, OnInit } from '@angular/core';
import { Pulso, DetallePulso } from "../../Models/Pulso";

import { Router } from "@angular/router";
import { CartService } from '../../services/cart.service';
import { ProductoService } from '../../services/producto.service';
import { environment } from 'src/environments/environment';
import { Producto } from 'src/app/Models/Producto';
import { Instancia } from '../../Models/Instancia';

@Component({
  selector: 'app-pulsos',
  templateUrl: './pulsos.page.html',
  styleUrls: ['./pulsos.page.scss'],
})
export class PulsosPage implements OnInit {

    lista: any[];
    rutaImg: string;
    segmentos: string[];
    pulsos: Pulso[];
    
    pagina: string;

    listaPulsos: DetallePulso[] = [];
    pulso: DetallePulso;

    instancias: Instancia[] = [];
    subcategoria = '';

    slideOpts = {
      slidesPerView: 2.3,
      grabCursor: true,
      freeMode: true
  }

    constructor(private productoService: ProductoService,
                public cartService: CartService,
                private ruta: Router) 
    {
        productoService.paginaActual = 0;
        this.segmentos = ruta.url.split('/');
        this.pagina = this.segmentos[this.segmentos.length-1];

        this.rutaImg = environment.url_imagenes + 'manilla/';
    }

    ngOnInit() {
        this.cargarProductos();

        this.productoService.getInstancias('1',this.pagina).subscribe(cat => {
            this.instancias = cat['instancias'];
        });
    }

  detallePulso(producto) {
      console.log('Mostrando detalle de ' + producto + ' en ' + this.pagina);
      this.ruta.navigate(['/pulsos/' + this.pagina + '/' + producto]);
  }

  cargarProductos(event?)
  {
      if (this.subcategoria.length == 0)
      {
          this.productoService.getPulsos(this.pagina).subscribe(datos => {
              console.log('Pulsos encontrados ', datos)
              this.pulsos = datos['pulsos'];
              console.log('Lista de pulsos de', this.pulsos);
        });    
      }
      else
      {
          this.productoService.getPulsos(this.subcategoria).subscribe(datos => {

              this.pulsos = datos['pulsos'];
          });          
      }
  }

  mostrarCarro()
  {

  }

  slideTap(item: Instancia){
    this.pulsos = [];
    console.log('Buscar ',item);
    this.subcategoria = item.CodInst.toString();
    this.cargarProductos();
  }
}