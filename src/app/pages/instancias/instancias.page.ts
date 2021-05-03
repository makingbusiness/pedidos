import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { Instancia } from '../../Models/Instancia';
import { Router } from '@angular/router';
import { VariosService } from 'src/app/services/varios.service';
import { Ciudad } from 'src/app/Models/Geografia';

@Component({
  selector: 'app-instancias',
  templateUrl: './instancias.page.html',
  styleUrls: ['./instancias.page.scss'],
})
export class InstanciasPage implements OnInit {

  constructor(public productoService: ProductoService,private router: Router,private varios: VariosService) {
   }

  ngOnInit() {
  }

  productos(instancia: string){

     const datos = this.productoService.getInstancia('1', instancia).subscribe(cat => {

        console.log('Info instancia: ', cat)
         if (cat.EsPulso == 'S') 
         {
            console.log('Vamos para instancias de ', instancia);
            this.router.navigate(['/pulsos/', cat.CodInst]);
         }
         else
         {
            console.log('Vamos para productos de ', instancia);
            this.router.navigate(['/productos/', cat.CodInst]);
         }
      });
  }
}
