import { Component } from '@angular/core';
import { DarkModeService } from '../../../../services/darkmode/dark-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dark-mode',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dark-mode.component.html',
  styleUrl: './dark-mode.component.scss'
})
export class DarkModeComponent {
  isDarkMode: boolean;

  constructor(private darkModeService: DarkModeService) {
    this.isDarkMode = this.darkModeService.getDarkMode();
  }

  toggleDarkMode(event: any): void {
    const checkbox = event.target as HTMLInputElement; // Cast event.target to HTMLInputElement
    const checked = checkbox.checked;
        this.darkModeService.toggleDarkMode();
    this.isDarkMode = checked;
  }
}
