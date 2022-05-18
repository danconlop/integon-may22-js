import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.sass'],
  // template: `
  //   <button (click)="Increment()">Increment</button><span> </span>
  //   <button (click)="Decrement()">Decrement</button>
  //   <h1><strong>{{counter}}</strong></h1>
  //   `,
})
export class CounterComponent implements OnInit {
  counter:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  Increment():void {
    this.counter++;
  }

  Decrement():void {
    this.counter--;
  }

}
