import { Injectable } from '@angular/core';
import { Vuelos } from './vuelos';

@Injectable({
  providedIn: 'root'
})
export class VuelosService {

  public vuelosArray:Vuelos[] = [
    { Numero:"33", Fecha:"05/19/2022", Horario:"18:30", Origen:"Tijuana", Destino:"CDMX" }
  ];
  constructor() { }

  getVuelos():Vuelos[]{
    return this.vuelosArray;
  }

  addVuelo(numero:string,fecha:string,horario:string,origen:string,destino:string){
    this.vuelosArray.push(
      { Numero:numero, Fecha:fecha, Horario:horario, Origen:origen, Destino:destino }
    )
  }
}
