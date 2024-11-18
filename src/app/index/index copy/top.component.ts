import { Component, AfterViewInit, ElementRef, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['../index.component.css']
})
export class TopComponent implements AfterViewInit {
  slidesPerViewQuemSomos = 3;
  menuOpen = false;
  mobileCard = false;
  currentIndex = 0;
  mobile = false;
  mobileSlides = 100;
  totalImages = 4;
  images = [
    { src: 'assets/img/SLIDE2-_1_.webp', alt: 'Imagem 1' },
    { src: 'assets/img/SLIDE2-_1_.webp', alt: 'Imagem 2' },
    { src: 'assets/img/SLIDE2-_1_.webp', alt: 'Imagem 3' },
    { src: 'assets/img/SLIDE2-_1_.webp', alt: 'Imagem 4' }
  ];
  slidesPerView = 1; // Default value for small screens

  breakpoints = {
    640: {
      slidesPerView: 2, // Tablets
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3, // Desktop
      spaceBetween: 30,
    },
  };
  slidesToShow = 1;
  currentStep: number = 1;

  constructor(private el: ElementRef, private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
    }
  }

  ngAfterViewInit() {
  
  }



  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }






}
