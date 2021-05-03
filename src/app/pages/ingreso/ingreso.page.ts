import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/Models/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { VariosService } from 'src/app/services/varios.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {

  usuario:Usuario

  constructor(private router: Router, 
              private usuarioService:UsuarioService,
              private variosService:VariosService,
              private alerta:AlertController) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuarioActivo

    this.cargarGeograficas()
  }

  cargarGeograficas()
  {
      this.variosService.getPaises().subscribe(p => {
        this.variosService.listaPaises = p["paises"]
      })

      this.variosService.getEstados().subscribe(e => {
        this.variosService.listaEstados = e["estados"]
      })

      this.variosService.getCiudades().subscribe(c => {
        this.variosService.listaCiudades = c["ciudades"]
      })
  }

  enviar()
  {
      console.log("Creando cuenta");
      console.log(this.usuario)
  }

  ingresar()
  {
      if (this.usuario.CodClie.length == 0)
      {
          this.mostrarMensaje('Ingrese el dato a consultar')
          return
      }

      this.usuarioService.consulta_usuario(this.usuario.CodClie).subscribe((u:any) => {
   
          if (u.usuario)
          {
            console.log('El usuario encontrado es', u.usuario)
            this.usuarioService.usuarioActivo = u.usuario
            console.log('Usuario consultado_ ',u.usuario)
            this.router.navigate(['usuario', 0])
          }
          else
          {
            this.mostrarMensaje('No hay coincidencias para la consulta')
          }
        })
  }

  async mostrarMensaje(mensaje:string)
  {
    const alerta = await this.alerta.create({
      header: 'Error en la consulta',
      message: mensaje,
      buttons: ['OK']
    })

    alerta.present()
  }

  crearCuenta()
  {
      console.log("Creando cuenta");
      this.router.navigate(['/usuario/']);
  }

}
