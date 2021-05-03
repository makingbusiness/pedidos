import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { environment } from 'src/environments/environment';
import { DetallePulso, Pulso } from '../../Models/Pulso';

@Component({
  selector: 'app-detalle-pulso',
  templateUrl: './detalle-pulso.page.html',
  styleUrls: ['./detalle-pulso.page.scss'],
})
export class DetallePulsoPage implements OnInit {

  segmentos: string[];
  pulso: DetallePulso
  carro: DetallePulso
  pulsos: DetallePulso[];
  codigo: string;
  descripcion: string;
  precio: number;
  ampliada: string;
  rutaImg: string;
  pagina: string;
  listaImagenes:string[] = []
  listaTexturas:string[] = []
  listaCalibres:string[] = []
  calibre:string = ''
  color:string = ''

  detalleOpts = {    
    initialSlide: 0
  }

  slideOpts = {    
    slidesPerView: 6,
    spaceBetween: 3,
    pagination: false
  }

  constructor(private productoService: ProductoService,
              private ruta: Router,
              public cartService: CartService)
  {
      this.segmentos = ruta.url.split('/');
      this.pagina = this.segmentos[this.segmentos.length-2];
      this.codigo = this.segmentos[this.segmentos.length-1];
  }

  ngOnInit() 
  {
      this.productoService.getPulso(this.codigo).subscribe(prod => {

          console.log('Al inicio de detalle', this.codigo,' ===> ', prod)
          this.pulso = prod

          this.productoService.getPulsosBase(prod.CodProd).subscribe(p => {

            this.pulsos = p["pulsos"]

            this.cargarInfo(this.pulsos[0].CodProd)

            this.pulsos.map(t => {

              if (t.ImgTexturas.length > 0)
              {
                  if (this.listaTexturas.filter(x => x.includes(t.ImgTexturas)).length === 0)
                  {
                      this.listaTexturas.push(`${ environment.url_imagenes}manilla/texturas/${t.ImgTexturas}`)
                  }
              }
            })
          })
      });
  }

  cargarInfo(codigo:string)
  {   
      console.log('Cargando info de .... ', codigo)
      const detalle:DetallePulso = this.pulsos.find(p => p.CodProd === codigo)

      this.pulso.Precio = detalle.Precio
      this.pulso.Impuesto = detalle.Impuesto
           
      this.rutaImg = `${ environment.url_imagenes}manilla/adicionales/${detalle.ImgPrincipal}`;
      
      this.listaImagenes = []
      let partes:string[] =  detalle.ImgAdicionales.split(';')

      let codigoCarro = this.pulso.CodProd

      if (this.calibre.length>0)
      {
          codigoCarro += '.' + this.calibre
      }

      if (this.color.length > 0)
      {
          codigoCarro += '.' +  this.color
      }

      this.carro = {
          ...this.pulso,
          ImgPrincipal: detalle.ImgPrincipal,
          CodProd: codigoCarro
      }

      console.log('Lo que se va a agregar...', this.carro)
      
      partes.map(parte => {

          const sub = parte.includes('-') ? 'manilla/adicionales/' : 'manilla/'

          this.listaImagenes.push(`${ environment.url_imagenes}${sub}/${parte}`)
      })

      this.listaCalibres = []

      this.calibre = ""
      this.color = ""

      if (this.pulso.ListaPartes.length > 0)
      {       
          if (this.pulso.ListaColores.length > 0)
          {
              const partesPulso = detalle.CodProd.split('.')
              this.color = partesPulso[partesPulso.length-1]
          }

          if (this.pulso.ListaCalibres.length > 0)
          {
              partes =  this.pulso.ListaPartes.split(',')
              
              partes.map(calibre => {
    
                if (calibre.split('.')[1]  === this.color || !calibre.includes('.'))
                {
                    if (this.calibre.length == 0) this.calibre = calibre.split('.')[0]
                    this.listaCalibres.push(calibre.split('.')[0])
                }
              })
          }
      }
  }

  cambiarImagen(pos:number)
  {
      this.listaImagenes = []
      const partes = this.listaTexturas[pos].split('.')
      this.color = partes[partes.length-2]

      let codigo = this.pulso.CodProd

      if (this.calibre.length>0)
      {
          codigo += '.' + this.calibre
      }

      if (this.color.length > 0)
      {
          codigo += '.' +  this.color
      }

      this.cargarInfo(codigo)
  }

  cambiarCalibre(calibre:string)
  {
      this.calibre = calibre

      let codigo = this.pulso.CodProd + '.' + this.calibre

      if (this.color.length > 0)
      {
          codigo += '.' +  this.color
      }

      this.carro = {
        ...this.pulso,
        CodProd: codigo
    }

    console.log('Lo que se va a agregar...', this.carro)
  }

  mostrarCarro()
  {
    this.ruta.navigate(['/carro']);
  }
}
