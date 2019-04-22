import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termometro-principal-fondo',
  templateUrl: './termometro-principal-fondo.component.html',
  styleUrls: ['./termometro-principal-fondo.component.css']
})
export class TermometroPrincipalFondoComponent implements OnInit {

  cambioDePantalla: number;
  constructor() { }

  ngOnInit() {
    this.cambioDePantalla=1;
  }

  cambiar(): void{
    this.cambioDePantalla++;
    console.log(this.cambioDePantalla);
  }

}
