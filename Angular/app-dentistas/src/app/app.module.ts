import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Tercero } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [QuintoComponent, ComponentOne]
})
export class AppModule { }
