import { Component, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../../../services/languages/language.service';
import jsonData from '../../../../assets/json/Languages.json';
import { FormsModule } from '@angular/forms';

interface Language {
  name: string;
  image: string;
}
@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.scss'
})

export class LanguagesComponent {
  languages: Language[] = [];
  selectedLanguage: Language | null = null;
  isOpen: boolean = false;
  constructor(    private elementRef: ElementRef,
    private languageService: LanguageService) { }
  ngOnInit(): void {
    this.languageService.getSelectedLanguage().subscribe((language) => {
      this.selectedLanguage = language;
      console.log(language)

      // Do something with the selected language
    });
    try {
      this.languages = jsonData;
    } catch (error) {
      console.error('Error loading language data:', error);
      // Handle the error gracefully, like displaying an error message
    }
  }
  
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      if (!this.elementRef.nativeElement.querySelector('.options').contains(event.target)) {
        this.isOpen = false;
      }
    }
  }

  toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(language: Language): void {
    
    this.languageService.setSelectedLanguage(language);
  }
}
