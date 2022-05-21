import { Component, OnInit } from '@angular/core';
import { Vuelos } from '../../shared/interfaces/vuelos';
import { VuelosService  } from '../../shared/services/vuelos.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.sass'],
})

export class VuelosComponent implements OnInit {

  vuelos:Vuelos[]=[];
  vuelo:Vuelos;
  // Datos del vuelo
  numero:string = "";
  fecha:string = "";
  horario:string = "";
  origen:string = "";
  destino:string = "";

  constructor(private vuelosService:VuelosService){}

  ngOnInit(){
    this.vuelosService
    .getVuelos()
    .subscribe(data => this.vuelos =  data)
  }

  onClick(){
    this.vuelo = {Numero: this.numero,Fecha: this.fecha, Horario: this.horario, Origen: this.origen, Destino: this.destino};

    this.vuelosService.addVuelo(this.vuelo)
      .subscribe( data => {
        if(data.status == 200){

          this.vuelos.push(this.vuelo);
          this.numero = "";
          this.fecha = "";
          this.horario = "";
          this.origen = "";
          this.destino = "";
          this.vuelo = null;
        }
      });



  }
}
