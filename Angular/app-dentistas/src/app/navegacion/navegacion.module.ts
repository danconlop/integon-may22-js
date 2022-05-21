import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavegacionRoutingModule } from './navegacion-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NavegacionRoutingModule
  ],
  exports: [
    NavegacionRoutingModule
  ]
})
export class NavegacionModule { }
