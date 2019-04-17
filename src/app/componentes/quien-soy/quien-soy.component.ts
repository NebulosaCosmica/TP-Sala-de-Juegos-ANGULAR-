import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  siNavega: boolean = false;
  constructor() { }

  ngOnInit() {
  }

redirige(): void{
  this.siNavega = true;
}

}
