import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-emdr-showcase',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './emdr-showcase.component.html',
  styleUrl: './emdr-showcase.component.scss'
})
export class EmdrShowcaseComponent {
  galleryImages = [
    {
      src: '/assets/images/emdr-therapy-tool-1.png',
      alt: 'EMDR Therapy Tool interface with blue theme'
    },
    {
      src: '/assets/images/emdr-therapy-tool-2.png',
      alt: 'EMDR Therapy Tool settings panel'
    },
    {
      src: '/assets/images/emdr-therapy-tool-3.png',
      alt: 'EMDR Therapy Tool in use during a session'
    }
  ];

  openImage(src: string) {
    // In a real implementation, you might want to open a lightbox/modal here
    console.log('Opening image:', src);
  }
}