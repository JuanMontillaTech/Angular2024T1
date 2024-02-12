 import { Component } from "@angular/core"
 import { RouterOutlet } from '@angular/router'; 
@Component ({
    selector: 'About',
    imports: [RouterOutlet],
    standalone: true, 
    template: 'Hola mi nombre es juan',
    
}) 
  export class aboutComponent {
    title = 'Practica';
  }