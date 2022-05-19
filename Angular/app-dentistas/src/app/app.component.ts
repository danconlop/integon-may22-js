import { Component } from '@angular/core';
import { PersonasService } from './personas.service';
import { Persona } from '../app/shared/interfaces/persona';

@Component({
  selector: 'app-root',
  template: `
  <div>
      <span>{{ businessTitle }}</span>
      <span>Teléfono: {{ businessPhone}}</span>
      <span>Dentista: {{ dentistName }}</span>
    </div>
  <button (click)="demo()">Demo</button>
  <InfoPersona [nombre]="'Daniel'" [apellido]="'Contreras'"></InfoPersona>
  <app-matematico #appMath1 [numero1]=-3 [numero2]=4 [operacion]="'-'" (buttonClicked)="onClick($event)"></app-matematico>
  <app-matematico #appMath2 [numero1]=10 [numero2]=15 [operacion]="'+'" (buttonClicked)="onClick($event)"></app-matematico>

  <p *ngIf="dentistName === 'Juan Perez'; else noSeCumple ">Si se cumplió la condición</p>
  <!-- <p *ngIf="dentistName !== 'Juan Perez'"> No se cumple la condición</p> -->
  <ng-template #noSeCumple>
    <p>No se cumplió la condición</p>
  </ng-template>

  <p>{{appMath1.numero1}}{{appMath1.operacion}}{{appMath1.numero2}} = {{appMath1.resultado}}</p>
  <p>{{appMath2.numero1}}{{appMath2.operacion}}{{appMath2.numero2}} = {{appMath2.resultado}}</p>

  <p appCopyright></p>

   <!-- Llamar componente de otro modulo -->
  <app-demoutilerias></app-demoutilerias>


  <input type="text" appNumeric>

  <div *appPermission="['admin', 'agent']">
    <h3>This area can be accessed by admins and agents</h3>
  </div>


  <table>
    <thead>
      <th>Nombre</th>
      <th>Apellido</th>
      <th>Ciudad</th>
    </thead>
    <tbody>
      <tr *ngFor="let persona of personas | sort:'nombre':'asc' ; index as miIndice">
        <td>{{miIndice+1}}.{{persona.nombre | uppercase}}</td>
        <td>{{persona.apellido | slice:2:4}}</td>
        <td>{{persona.ciudad}}</td>
        <td>{{persona.moneda | currency:'EUR'}}</td>
      </tr>
    </tbody>
  </table>

  Dato: <input type="text" id="txtDato" [(ngModel)]="dato">
  {{ dato }}

  <app-vuelos></app-vuelos>

    `,
  styleUrls: ['./app.component.sass'],
  providers: [ PersonasService ]
})

export class ComponentOne { //export class AppComponent {
  title = 'app-dentistas';
  businessTitle = 'Laboratorio dental BBB';
  dentistName = 'Juan Perez';
  businessPhone = '666 666 6666';
  dato:string = "";

  personas:Persona[] = [];
  // public personas = [
  //   {id:1, nombre: "Ivan", apellido: "Chavez", ciudad: "Hermosillo", moneda: 10000},
  //   {id:2, nombre: "Daniel", apellido: "Contreras", ciudad: "Tijuana", moneda: 12000},
  //   {id:3, nombre: "Jorge", apellido: "Perez", ciudad: "Mexicali", moneda: 15000},
  // ]


  demo():void {
    this.businessTitle = "Modificado por click handler";
  }

  onClick($event){
    // if($event)
    //   window.alert("Se presionó el boton");
    // else
    //   window.alert("Se presionó mal el boton");
  }

  constructor (private personasService:PersonasService){}

  ngOnInit(){
    this.personas = this.personasService.getPersonas();
  }

}
