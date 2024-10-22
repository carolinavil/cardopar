

import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements AfterViewInit {
    constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

    ngAfterViewInit() {
        if (isPlatformBrowser(this.platformId)) {
            AOS.init();
        }
    }

    

slides = [
  { img: "https://via.placeholder.com/600x400?text=1" },
  { img: "https://via.placeholder.com/600x400?text=2" },
  { img: "https://via.placeholder.com/600x400?text=3" }
];
slideConfig = {
  slidesToShow: 3,
  infinite: false,
  responsive: [
    {
      breakpoint: 900, // Quando a tela for menor que 900px
      settings: {
        slidesToShow: 1.5, // Exibir 3 slides
      }
    }
  ]
};


currentStep: number = 1; // Passo inicial

selectStep(step: number) {
  this.currentStep = step; // Atualiza o passo atual com base no botão clicado
}
}



