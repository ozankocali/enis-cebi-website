import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
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
}
