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

  constructor() {
    
  }
  
  menu = [
    {
      titulo: "Menu",
      item1: "Biblioteca",
      item2: "Buscar",
      item3: "Perfil",
      item4: "Configuración",
      item5: "Ayuda",
    }
  ]

  home = [
    {
      titulo: "PlayerPro",
      recomendaciones: "Recomendaciones: "
    }
  ]

  slidesHome = [
    {
      titulo: "Rock",
      imagen: "assets/Images/acdc.jpg"
    },
    {
      titulo: "Metal",
      imagen: "assets/Images/metallica.png"
    },
    {
      titulo: "Pop",
      imagen: "assets/Images/backstreetboys.jpg"
    }
  ]
}
