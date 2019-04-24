import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termometro-principal-fondo',
  templateUrl: './termometro-principal-fondo.component.html',
  styleUrls: ['./termometro-principal-fondo.component.css']
})
export class TermometroPrincipalFondoComponent implements OnInit {

  cambioDePantalla: number;

  respuesta: string ="respuesta";

  constructor() { }

  ngOnInit() {
    this.cambioDePantalla=1;
  }

  cambiar(): void{
    
    console.log(this.cambioDePantalla);    

    console.log(this.respuesta);

    this.verificarRespuesta(this.respuesta);

  }
  
  verificarRespuesta(rta: string):void{

    switch(this.cambioDePantalla){
      case 3: 

              if(rta=="Gato" || rta== "Caballo"){
                this.cambioDePantalla=13;
              }else{

              this.cambioDePantalla++;
              }
              break;
      case 4:
              if(rta=="Leche" || rta== "Huevos"){
                this.cambioDePantalla=13;
              }else{

                this.cambioDePantalla++;
              } 
              break;

      default:
            this.cambioDePantalla++;
            break;
    }
    

  } // verificar respuesta

}
