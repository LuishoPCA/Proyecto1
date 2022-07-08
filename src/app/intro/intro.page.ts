import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  slideOpt={
    initialSlide: 0, //Slide inicial
    slidesPerView: 1, //Slide por vista
    centeredSlide: true, //Que las Slides esten centradas
    speed: 400 //Velocidad de transición de cada Slide en milisegundos
  }

  slides = [
    {
      titulo: "Titulo1",
      subtitulo: "Subtitulo1",
      icono: "musical-notes-outline",
      imagen: "assets/Images/slide1.jpg",
      descripcion: "Descripcion1"
    },
    {
      titulo: "Titulo2",
      subtitulo: "Subtitulo2",
      icono: "musical-note-outline",
      imagen: "assets/Images/slide2.jpg",
      descripcion: "Descripcion2"
    },
    {
      titulo: "Titulo3",
      subtitulo: "Subtitulo3",
      icono: "play-outline",
      imagen: "assets/Images/slide3.jpg",
      descripcion: "Descripcion3"
    }
  ]


  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
  }

  ngOnInit(): void {
    this.showe().then( x => {
      //console.log(x);
      if (x) {
        this.router.navigateByUrl("/home");
      }
    })
  }

  async showe(){
    const show = await this.storage.get("isIntroShowd");
    return show;
  }

  terminar(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }

}
