import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt={
    initialSlide: 0, //Slide inicial
    slidesPerView: 1, //Slide por vista
    centeredSlide: true, //Que las Slides esten centradas
    speed: 400 //Velocidad de transición de cada Slide en milisegundos
  }

  constructor() {}

}
