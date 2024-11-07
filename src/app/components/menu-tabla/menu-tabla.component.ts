import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  templateUrl: './menu-tabla.component.html',
  styleUrl: './menu-tabla.component.css'
})
export class MenuTablaComponent {
  public numerosRandom: Array<number>;

  constructor() {
    this.numerosRandom = new Array<number>();
    for (var i = 1; i <= 5; i++){
      let random = Math.floor((Math.random() * 100)) + 1;
      this.numerosRandom.push(random);
    }
  }
}
