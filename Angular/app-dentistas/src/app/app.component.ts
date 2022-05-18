import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  template: `
  <div>
      <span>{{ businessTitle }}</span>
      <span>Teléfono: {{ businessPhone}}</span>
      <span>Dentista: {{ dentistName }}</span>
    </div>
  <button (click)="demo()">Demo</button>
    <app-ejemplo></app-ejemplo>
    <app-quinto></app-quinto>
    <app-quinto></app-quinto>
    <app-quinto></app-quinto>
    <app-counter></app-counter>
    `,
  styleUrls: ['./app.component.sass']
})
export class ComponentOne { //export class AppComponent {
  title = 'app-dentistas';
  businessTitle = 'Laboratorio dental BBB';
  dentistName = 'Juan Perez';
  businessPhone = '666 666 6666';

  demo():void {
    this.businessTitle = "Modificado por click handler";
  }
}
