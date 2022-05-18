import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'InfoPersona',
  templateUrl: './info-persona.component.html',
  styleUrls: ['./info-persona.component.sass']
})
export class InfoPersonaComponent implements OnInit, OnDestroy {

  @Input() public nombre:string = "";
  @Input() apellido:string = "";

  constructor() { }

  ngOnInit(): void {
    console.log("Se inicializó el componente infoPersona");
  }

  ngOnDestroy(): void {
    console.log("Se destruyó el componente infoPersona");
  }

  ngOnchanges(changes){
    console.log("Se recibieron datos de entrada");
  }
}
