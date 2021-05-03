import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/Models/Usuario';
import { CartService } from 'src/app/services/cart.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  usuario: Usuario

  constructor(public menu: MenuController, 
              private router: Router, 
              private usuarioService: UsuarioService,
              private cartService:CartService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuarioActivo
    console.log('El usuario activo es: ',this.usuario)
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

  mostrarRelojes(){
    const relojes = 1405;
    this.router.navigate(['/productos/', relojes]);
  }

  mostrarPulsos(){
    const pulsos = 954;
    this.router.navigate(['/pulsos/', pulsos]);
  }

  mostrarBaterias(){
    const baterias = 956;
    this.router.navigate(['/productos/', baterias]);
  }

  mostrarCalculadoras(){
    const calculadoras = 957;
    this.router.navigate(['/productos/', calculadoras]);
  }

  mostrarHerramientas(){
    const htas = 896;
    this.router.navigate(['/productos/', htas]);
  }

  mostrarCuenta(){
    if (this.usuario.CodClie.length > 0)
    {
      this.router.navigateByUrl('usuario');
    }
    else
    {
      this.router.navigateByUrl('ingreso')
    }
  }

  cerrar() {
    this.usuarioService.cancelarUsuario()
    this.usuario = this.usuarioService.usuarioActivo

    this.cartService.limpiarCarro()
    
    this.router.navigateByUrl("/")
  }
}
