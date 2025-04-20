import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pvdb-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pvdb-showcase.component.html',
  styleUrl: './pvdb-showcase.component.scss'
})
export class PvdbShowcaseComponent {
  currentSlide = 0;
  carouselImages = [
    {
      src: '/assets/images/pvdbproject.png',
      alt: 'Homepage van Praktijk van der Boom'
    },
    {
      src: '/assets/images/pvdbaanmelding.png',
      alt: 'Afsprakensysteem van de website'
    },
    {
      src: '/assets/images/pvdbmobiel.png',
      alt: 'Mobile weergave van de website'
    },
    {
      src: '/assets/images/pvdbprojecttwee.png',
      alt: 'Behandelingen overzicht pagina'
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