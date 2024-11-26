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
  mobileCard = false;
  currentIndex = 0;
  mobile = false;
  mobileSlides = 100;
  totalImages = 4;
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

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setSlidesToShow();
      window.addEventListener('resize', () => this.setSlidesToShow());
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Placeholder for any functionality needed after view initialization in the browser
    }
  }

  setSlidesToShow() {
    if (window.innerWidth <= 768) {
      this.mobile = true;
      this.mobileSlides = 75;
    } else {
      this.mobile = false;
      this.mobileSlides = 100;
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Mantendo o método getTransform conforme solicitado
  getTransform() {
    return `translateX(${-this.currentIndex * (100 / this.slidesToShow)}%)`;
  }

  getTransformOs() {
    return `translateX(${-this.currentIndex * (85 / this.slidesToShow)}%)`;
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.currentStep = this.currentStep === 1 ? 3 : this.currentStep - 1;
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.totalImages;
    this.currentStep = (this.currentStep % 3) + 1;
  }

  adjustSlidesPerView(windowWidth: number) {
    this.mobileCard = false;
    if (windowWidth <= 2000) {
      this.slidesPerViewQuemSomos = 2;
      if (windowWidth <= 960) {
        this.mobileCard = true;
        this.slidesPerViewQuemSomos = 1;
      }
    }
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
        return 'Especialistas em Segurança';
      case 3:
        return 'Especialistas em Performance';
      default:
        return '';
    }
  }

  getDescription() {
    switch (this.currentStep) {
      case 1:
        return 'Implementamos medidas de segurança robustas para proteger seus dados e garantir sua privacidade absoluta na internet.';
      case 2:
        return 'Oferecemos soluções avançadas de segurança para proteger seu site de ameaças.';
      case 3:
        return 'Otimização de performance para uma experiência de usuário mais rápida e eficiente.';
      default:
        return '';
    }
  }
}
