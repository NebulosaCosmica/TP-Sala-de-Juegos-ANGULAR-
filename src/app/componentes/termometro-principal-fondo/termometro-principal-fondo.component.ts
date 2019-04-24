import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termometro-principal-fondo',
  templateUrl: './termometro-principal-fondo.component.html',
  styleUrls: ['./termometro-principal-fondo.component.css']
})
export class TermometroPrincipalFondoComponent implements OnInit {

  cambioDePantalla: number;

  respuesta: string;

  constructor() { }

  ngOnInit() {
    this.cambioDePantalla=1;
  }

  cambiar(): void{

    // validar seleccion, no seleccionada
    if(this.respuesta==undefined && this.cambioDePantalla>2){
      console.log("Seleccionar algo");
      
    }else{

    console.log(this.cambioDePantalla);    

    console.log(this.respuesta);

    this.verificarRespuesta(this.respuesta);
    }
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
              if(rta=="Manzanas" || rta== "Nueces"){
                this.cambioDePantalla=13;
              }else{

                this.cambioDePantalla++;
              } 
              break;
      case 5:
              this.cambioDePantalla=3;
              this.respuesta=undefined;
              break;
      case 12:
              this.cambioDePantalla=3;
              this.respuesta=undefined;
              break;
      case 13:
              this.cambioDePantalla=3;
              this.respuesta=undefined;
              break;
      default:
            this.cambioDePantalla++;
            break;
    }
    

  } // verificar respuesta

}
