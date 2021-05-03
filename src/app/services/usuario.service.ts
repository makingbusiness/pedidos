import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../Models/Usuario';

const url = environment.url_base

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioActivo:Usuario = {
    CodClie: '',
    Nombres: '',
    Apellidos: '',
    Telefono: '',
    Email: '',
    Direccion: '',
    Pais: 57,
    Estado: 5,
    Ciudad: 5001
  }

  constructor(private http: HttpClient) {}

  cancelarUsuario()
  {
    this.usuarioActivo = {
      CodClie: '',
      Nombres: '',
      Apellidos: '',
      Telefono: '',
      Email: '',
      Direccion: '',
      Clave: '',
      Pais: 57,
      Estado: 5,
      Ciudad: 5001
    } 
  }

  insertar_usuario(usuario:Usuario)
  {
      return this.http.post(`${url}insertar_usuario`, JSON.stringify(usuario))
  }

  actualizar_usuario(usuario:Usuario)
  {
      return this.http.post(`${url}actualizar_usuario`, JSON.stringify(usuario))
  }

  actualizar_clave(usuario:Usuario)
  {
      return this.http.post(`${url}actualizar_clave`, JSON.stringify(usuario))
  }  

  consulta_usuario(codigo:string)
  {
      return this.http.get(`${url}consulta_usuario/${codigo}`)
  }
}
