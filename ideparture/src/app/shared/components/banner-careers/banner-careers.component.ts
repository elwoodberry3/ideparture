// src/app/shared/components/banner.component.ts
import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

@Component({
  selector: 'app-banner',
  standalone: true,
  templateUrl: './banner-careers.component.html',
  imports: [CommonModule], // Add CommonModule here
})
export class BannerComponent {
  @Input() showBanner: boolean = false;
  isVisible: boolean = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.isVisible = false;
  }

  toggleBanner() {
    this.isVisible = !this.isVisible;
  }
}
