import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule  } from '@angular/forms';

import { ComponentOne } from './app.component';
import { Ejemplo } from './app.ejemplo';
import { Tercero } from './app.tercero';
import { QuintoComponent } from './quinto/quinto.component';
import { CounterComponent } from './counter/counter.component';
import { InfoPersonaComponent } from './info-persona/info-persona.component';
import { MatematicoComponent } from './matematico/matematico.component';

// Módulos externos
import { UtileriasModule } from './utilerias/utilerias.module'
import { SharedModule } from './shared/shared.module';
import { AerolineaModule } from './aerolinea/aerolinea.module';

@NgModule({
  declarations: [
    ComponentOne,
    Ejemplo,
    Tercero,
    QuintoComponent,
    CounterComponent,
    InfoPersonaComponent,
    MatematicoComponent,
  ],
  imports: [
    BrowserModule,
    UtileriasModule,
    SharedModule,
    FormsModule,
    AerolineaModule
  ],
  providers: [
  ],
  bootstrap: [ComponentOne]
})
export class AppModule { }
