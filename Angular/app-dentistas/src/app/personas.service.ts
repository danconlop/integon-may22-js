import { Injectable } from '@angular/core';
import { Persona } from '../app/shared/interfaces/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor() { }

  getPersonas():Persona[]{
    let personas:Persona[] = [
      {id:1, nombre: "Ivan", apellido: "Chavez", ciudad: "Hermosillo", moneda: 10000},
      {id:2, nombre: "Daniel", apellido: "Contreras", ciudad: "Tijuana", moneda: 12000},
      {id:3, nombre: "Jorge", apellido: "Perez", ciudad: "Mexicali", moneda: 15000},
      {id:4, nombre: "Luis", apellido: "Mendez", ciudad: "CDMX", moneda: 2000},
      {id:5, nombre: "Paco", apellido: "Rosales", ciudad: "Tamaulipas", moneda: 30000},
    ]
    return personas;
  }
}
