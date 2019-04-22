import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent implements OnInit {

  //menuJuegos:boolean =false;
  constructor(private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit() {
  }

  focoArriba(): void{
  
    document.documentElement.scrollTop = 0;
  }
  

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        //  this.menuJuegos=true;
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'TermometroVegano':
        this.router.navigate(['/Juegos/Termometro']);
        break;
      case 'Anagrama':
      this.router.navigate(['/Juegos/Anagrama']);
      break;
    }
  }
}
