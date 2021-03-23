import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent {

  ventasNetas: number = 2567899.099;
  ventasBrutas: number = 3590670.78;
  porcentaje: number = 0.48;


}
