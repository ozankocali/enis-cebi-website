import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {



  services = [
    { icon: 'bi-wifi', name: 'Ücretsiz Wi-Fi' },
    { icon: 'bi-house-door', name: '24/7 Güvenlik' },
    { icon: 'bi-cup-hot', name: 'Kafeterya' },
    { icon: 'bi-tv', name: 'TV Odası' },
    { icon: 'bi-person-arms-up', name: 'Spor Salonu' },
    { icon: 'bi-basket', name: 'Çamaşırhane' },
    { icon: 'bi-bus-front', name: 'Servis' },
    { icon: 'bi-book', name: 'Kütüphane' },
    { icon: 'bi-people', name: 'Sosyal Alan' },
    { icon: 'bi-gear', name: 'Teknik Destek' }
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
