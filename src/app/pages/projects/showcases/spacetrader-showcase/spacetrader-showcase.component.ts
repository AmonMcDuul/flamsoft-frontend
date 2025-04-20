import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-spacetrader-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './spacetrader-showcase.component.html',
  styleUrl: './spacetrader-showcase.component.scss'
})
export class SpacetraderShowcaseComponent {
  currentSlide = 0;
  carouselImages = [
    {
      src: '/assets/images/spacetraderproject.png',
      alt: 'Space Trader gameplay',
      caption: 'Handel tussen planeten en bezorg je pakketten op tijd'
    },
    {
      src: '/assets/images/spacetradertrading.png',
      alt: 'Marktscherm Space Trader',
      caption: 'Volg marktprijzen en speel in op economische kansen'
    },
    {
      src: '/assets/images/spacetraderinvestors.png',
      alt: 'Schip aanpassen in Space Trader',
      caption: 'Let op je brandstof en betaal op tijd je lening af'
    },
    {
      src: '/assets/images/spacetraderthemes.gif',
      alt: 'Ruimtegevecht in Space Trader',
      caption: 'In verschillende themas speelbaar'
    }
  ];

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.carouselImages.length) % this.carouselImages.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}