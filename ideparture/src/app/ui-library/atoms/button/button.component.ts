/**
 * BUTTON
 * An Atom.
 * 
 * iDeparture Design System v.3.0.1
 */

import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})

export class ButtonComponent {
  @Output() buttonClick = new EventEmitter<void>();

  @Input() text: string = '';
  @Input() icon: string | null = null; // Optional icon name
  @Input() styleType: 'text-only' | 'text-icon' | 'filled' | 'outline' = 'text-only';
  @Input() backgroundColor?: string; // Example declaration
  @Input() size?: 'small' | 'large'; // Example declaration
}
