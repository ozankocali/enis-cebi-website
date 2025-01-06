import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {


  services = [
    { icon: 'bi-wifi', name: 'SERVICE.WIFI.NAME' },
    { icon: 'bi-camera-video', name: 'SERVICE.24_7_SECURITY.NAME' },
    { icon: 'bi-droplet', name: 'SERVICE.WATER_DISPENSER.NAME' },
    { icon: 'bi-basket', name: 'SERVICE.LAUNDRY.NAME' },
    { icon: 'bi-emoji-smile', name: 'SERVICE.FACE_RECOGNITION.NAME' },
    { icon: 'bi-lightning-charge', name: 'SERVICE.UNINTERRUPTED_RESOURCES.NAME' },
    { icon: 'bi-moon-stars', name: 'SERVICE.MOSQUE.NAME' },
    { icon: 'bi-door-closed', name: 'SERVICE.CARD_ACCESS_ROOM_SYSTEM.NAME' },
    { icon: 'bi-person-arms-up', name: 'SERVICE.GYM.NAME' },
    { icon: 'bi-stars', name: 'SERVICE.CLEANING.NAME' },
    { icon: 'bi-book', name: 'SERVICE.LIBRARY.NAME' },
    { icon: 'bi-fire', name: 'SERVICE.FIRE_SENSOR.NAME' }
  ];

  screenWidth: number;
  screenHeight: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.screenWidth = window.innerWidth;
      this.screenHeight = window.innerHeight;
    }
    else {
      this.screenWidth = 1000;
      this.screenHeight = 1000;
    }
  }
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.getElementById("modalButton")?.click();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
    this.screenHeight = event.target.innerHeight;
  }
}
