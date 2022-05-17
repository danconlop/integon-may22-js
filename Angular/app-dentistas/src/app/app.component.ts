import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class ComponentOne { //export class AppComponent {
  title = 'app-dentistas';
  businesssTitle = 'Laboratorio dental BBB';
  dentistName = 'Juan Perez';
  businessPhone = '666 666 6666';
}
