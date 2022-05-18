import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-matematico',
  templateUrl: './matematico.component.html',
  styleUrls: ['./matematico.component.sass'],
})
export class MatematicoComponent implements OnInit {
  @Input() numero1: number = 0;
  @Input() numero2: number = 0;
  @Input() operacion: string = '+';
  resultado: number = 0;

  @Output() buttonClicked = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(changes) {
    const num1 = changes['numero1'];
    const num2 = changes['numero2'];

    this.numero1 = num1.currentValue < 0 ? 0 : num1.currentValue;
    this.numero2 = num2.currentValue < 0 ? 0 : num2.currentValue;

    this.ejecutarOperacion();
  }

  emitirEvento() {
    this.ejecutarOperacion();
    //this.buttonClicked.emit(false);
  }

  ejecutarOperacion(): number {
    this.resultado = 0;

    switch (this.operacion) {
      case '+':
        this.resultado = this.numero1 + this.numero2;
        break;
      case '-':
        this.resultado = this.numero1 - this.numero2;
        break;
      case '*':
        this.resultado = this.numero1 * this.numero2;
        break;
      case '/':
        this.resultado = this.numero1 / this.numero2;
        break;
    }

    return this.resultado;
  }
}
