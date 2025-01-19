import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {
  services = [
    { icon: 'bi-wifi', name: 'SERVICE.WIFI.NAME', desc: 'SERVICE.WIFI.DESC' },
    { icon: 'bi-camera-video', name: 'SERVICE.24_7_SECURITY.NAME', desc: 'SERVICE.24_7_SECURITY.DESC' },
    { icon: 'bi-droplet', name: 'SERVICE.WATER_DISPENSER.NAME', desc: 'SERVICE.WATER_DISPENSER.DESC' },
    { icon: 'bi-basket', name: 'SERVICE.LAUNDRY.NAME', desc: 'SERVICE.LAUNDRY.DESC' },
    { icon: 'bi-emoji-smile', name: 'SERVICE.FACE_RECOGNITION.NAME', desc: 'SERVICE.FACE_RECOGNITION.DESC' },
    { icon: 'bi-lightning-charge', name: 'SERVICE.UNINTERRUPTED_RESOURCES.NAME', desc: 'SERVICE.UNINTERRUPTED_RESOURCES.DESC' },
    { icon: 'bi-moon-stars', name: 'SERVICE.MOSQUE.NAME', desc: 'SERVICE.MOSQUE.DESC' },
    { icon: 'bi-door-closed', name: 'SERVICE.CARD_ACCESS_ROOM_SYSTEM.NAME', desc: 'SERVICE.CARD_ACCESS_ROOM_SYSTEM.DESC' },
    { icon: 'bi-person-arms-up', name: 'SERVICE.GYM.NAME', desc: 'SERVICE.GYM.DESC' },
    { icon: 'bi-stars', name: 'SERVICE.CLEANING.NAME', desc: 'SERVICE.CLEANING.DESC' },
    { icon: 'bi-book', name: 'SERVICE.LIBRARY.NAME', desc: 'SERVICE.LIBRARY.DESC' },
    { icon: 'bi-fire', name: 'SERVICE.FIRE_SENSOR.NAME', desc: 'SERVICE.FIRE_SENSOR.DESC' }
  ];

  selectedImage: string = '';


  showImage(imagePath: string) {
    this.selectedImage = imagePath;
  }

}
