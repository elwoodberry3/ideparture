/**
 * HEADER.COMPONENT
 */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import common utilities
import { RouterModule } from '@angular/router';  // Import RouterModule if you use routing links

@Component({
  selector: 'app-header',
  standalone: true,  // Marks it as standalone
  imports: [CommonModule, RouterModule],  // Import any necessary Angular modules here
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
