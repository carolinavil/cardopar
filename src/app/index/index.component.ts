import { Component, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit {
  slidesPerViewQuemSomos = 3;
  menuOpen = false;
  images = [
    { src: 'assets/img/SLIDE3 (1).svg', alt: 'Imagem 1' },
    { src: 'assets/img/SLIDE4.svg', alt: 'Imagem 2' },
    { src: 'assets/img/SLIDE5.svg', alt: 'Imagem 3' },
    { src: 'assets/img/SLIDE5.svg', alt: 'Imagem 4' }
  ];
  slidesToShow = 2;
  currentStep: number = 1;
  slidesPerView = 2; // Default value for small screens
  slideServicos=2
  breakpoints = {
    100: {
      slidesPerView:1.2, // Tablets
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2, // Tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // Desktop
      spaceBetween: 30,
    },
  };

  breakpointsServicos = {
    100: {
      slidesPerView:1.2, // Tablets
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 3, // Tablets
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 4, // Desktop
      spaceBetween: 0,
    },
  };
 
 
  breakpointsMarcas = {
    640: {
      slidesPerView: 2, // Tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView:4, // Desktop
      spaceBetween: 0,
    },
  };

  constructor( @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    
     
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Placeholder for any functionality needed after view initialization in the browser
    }
  }



  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }


  // Método selectStep mantido conforme solicitado
  selectStep(step: number) {
    this.currentStep = step;
  }

  getBoxClass() {
    switch (this.currentStep) {
      case 1:
        return 'back-caixa-servico caixa-um';
      case 2:
        return 'back-caixa-servico caixa-dois';
      case 3:
        return 'back-caixa-servico caixa-tres';
      default:
        return '';
    }
  }

  getTitle() {
    switch (this.currentStep) {
      case 1:
        return 'Especialistas em WordPress';
      case 2:
        return 'AWS, Azure e Google Cloud';
      case 3:
        return 'Escalamento Automático';
      default:
        return '';
    }
  }

  getDescription() {
    switch (this.currentStep) {
      case 1:
        return 'Implementamos medidas de segurança robustas para proteger seus dados e garantir sua privacidade absoluta na internet.';
      case 2:
        return 'Oferecemos soluções em Google Cloud, Microsoft Azure e AWS, adaptando serviços às necessidades do cliente.';
      case 3:
        return 'Nossas soluções se ajustam automaticamente conforme a demanda aumenta ou diminui, garantindo eficiência e redução de custos à medida que você utiliza mais ou menos recursos.';
      default:
        return '';
    }
  }
}
