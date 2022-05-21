import { Component } from '@angular/core';
import { PersonasService } from './shared/services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [ PersonasService ]
})

export class ComponentOne {
  title = 'app-dentistas';
  Prop1 = 'Laboratorio dental BBB';
  Prop2 = 'Juan Perez';
  Prop3 = '666 666 6666';

  demo():void {
    this.Prop1 = "Modificado por click handler";
  }

}
