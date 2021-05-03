import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Ciudad, Estado, Pais } from '../Models/Geografia';

const url = environment.url_base

@Injectable({
  providedIn: 'root'
})
export class VariosService {

  listaPaises:Pais[] = []
  listaEstados:Estado[] = []
  listaCiudades:Ciudad[] = []

  constructor(private http: HttpClient) { }

  getPaises() 
  {
      return this.http.get(`${url}listaPaises`);
  }

  getEstados()
  {
      return this.http.get(`${url}listaEstados`)
  }

  getCiudades()
  {
      return this.http.get(`${url}listaCiudades`)
  }
}
