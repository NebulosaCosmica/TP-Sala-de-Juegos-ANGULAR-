import { Component, OnInit } from '@angular/core';

// puesto el ingreso alguien para cuando ande el logueo
// ver el ngIf

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  ingresoAlguien:boolean = false;

  constructor() {  }

  ngOnInit() {
  }
  

 

}
