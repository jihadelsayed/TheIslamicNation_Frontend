import { LocationService } from '../../../../services/location/location.service';
import { Component, ElementRef, HostListener } from '@angular/core';
import jsonData from '../../../../assets/json/Locations.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Location {
  name: string;
  image: string;
}
@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss'
})

export class LocationsComponent {
  locations: Location[] = [];
  selectedLocation: Location | null = null;
  isOpen: boolean = false;
  constructor(    private elementRef: ElementRef,
    private locationService: LocationService) { }
  ngOnInit(): void {
    this.locationService.getSelectedLocation().subscribe((location) => {
      this.selectedLocation = location;
      console.log(location)

      // Do something with the selected location
    });
    try {
      this.locations = jsonData;
    } catch (error) {
      console.error('Error loading location data:', error);
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

  selectLocation(location: Location): void {
    
    this.locationService.setSelectedLocation(location);
  }
}
