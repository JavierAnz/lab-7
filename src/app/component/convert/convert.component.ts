import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { SaveConvertComponent } from '../save-convert/save-convert.component';
import {conversion} from '../../modules/conversion.models'


@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [ReactiveFormsModule,SaveConvertComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.scss'
})

export class ConvertComponent {
  public Tipo = new FormControl(0);
  public Cantidad = new FormControl(0);

  public Calculos: conversion[] = [];
  public Farenheit: number = 0;

  Calcular() {
    if (this.Tipo.value == 1 &&  this.Cantidad.value != null) {
      // Conversión de Celsius a Fahrenheit
      this.Farenheit = (this.Cantidad.value * 9/5) + 32;

      this.Calculos.push(new conversion( this.Cantidad.value, this.Farenheit));

    } else if (this.Tipo.value == 2 && this.Cantidad.value != null) {
      // Conversión de Fahrenheit a Celsius
      this.Farenheit = (this.Cantidad.value - 32) * 5/9;
      this.Calculos.push(new conversion(this.Farenheit , this.Cantidad.value));
    }  else{
      alert("Ingrese a que tipo desea convertir");
    }
    
 
  }

  BorrarProducto(data: conversion) { 
    this.Calculos = this.Calculos.filter(x => x.celsius != data.celsius)

  }
}
