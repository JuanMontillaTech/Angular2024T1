import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-Contador',
    standalone: true, 
    imports: [RouterOutlet],
    template: '  mundo', 
  })
  export class contadorComponent {
    title = 'Practica';
  }
  