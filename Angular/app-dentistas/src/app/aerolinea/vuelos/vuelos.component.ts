import { Component, OnInit } from '@angular/core';
import { VuelosService  } from '../vuelos.service';
import { Vuelos } from '../vuelos';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass'],
})

export class VuelosComponent implements OnInit {

  vuelos:Vuelos[];
  // Datos del vuelo
  numero:string = "";
  fecha:string = "";
  horario:string = "";
  origen:string = "";
  destino:string = "";

  constructor(private vuelosService:VuelosService){}

  ngOnInit(){
    this.vuelos = this.vuelosService.vuelosArray;
  }

  onClick(){
    this.vuelosService.addVuelo(this.numero,this.fecha,this.horario,this.origen,this.destino);
    this.numero = "";
    this.fecha = "";
    this.horario = "";
    this.origen = "";
    this.destino = "";
  }
}
