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
    { icon: 'bi-wifi', name: 'Wi-Fi' },
    { icon: 'bi-camera-video', name: '24/7 Güvenlik' },
    { icon: 'bi-droplet', name: 'Su Sebili' },
    { icon: 'bi-basket', name: 'Çamaşırhane' },
    { icon: 'bi-emoji-smile', name: 'Yüz Tanıma' },
    { icon: 'bi-lightning-charge', name: 'Kesintisiz Kaynaklar' },
    { icon: 'bi-moon-stars', name: 'Mescid' },
    { icon: 'bi-door-closed', name: 'Kartlı Oda Sistemi' },
    { icon: 'bi-person-arms-up', name: 'Spor Salonu' },
    { icon: 'bi-stars', name: 'Temizlik' },
    { icon: 'bi-book', name: 'Kütüphane' },
    { icon: 'bi-fire', name: 'Yangın Sensörü' }

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
