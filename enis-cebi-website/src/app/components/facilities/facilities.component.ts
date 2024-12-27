import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-facilities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './facilities.component.html',
  styleUrl: './facilities.component.scss'
})
export class FacilitiesComponent {
  services = [
    { icon: 'bi-wifi', name: 'Wi-Fi', desc: 'Fiber internet altyapısıyla internete her katta erişim' },
    { icon: 'bi-camera-video', name: '24/7 Güvenlik', desc: 'Bütün ortak alanlar, dış mekanlar 7/24 kayıtta.' },
    { icon: 'bi-droplet', name: 'Su Sebili', desc: 'Katlarda hem içme suyu hem de sıcak su 7/24 hazır.' },
    { icon: 'bi-basket', name: 'Çamaşırhane', desc: 'Ücretsiz kullanım' },
    { icon: 'bi-emoji-smile', name: 'Yüz Tanıma', desc: 'Hem güvenliğiniz için hem de imzalı yoklama yerine teknolojik sistem.' },
    { icon: 'bi-lightning-charge', name: 'Kesintisiz Kaynaklar', desc: 'Elektriğin kesilmesi bizi etkilemez.' },
    { icon: 'bi-moon-stars', name: 'Mescid', desc: '7/24 Açık' },
    { icon: 'bi-door-closed', name: 'Kartlı Oda Sistemi', desc: 'Odalarınız sadece size ve oda arkadaşlarınıza aittir.' },
    { icon: 'bi-person-arms-up', name: 'Spor Salonu', desc: 'Sağlıklı yaşam için uygun ortam.' },
    { icon: 'bi-stars', name: 'Temizlik', desc: 'Sağlığın ve hijyenin için en iyi ürünlerini kullanan profesyonel eller.' },
    { icon: 'bi-book', name: 'Kütüphane', desc: 'Çeşitli kitaplarla donatılmış okuma alanı.' },
    { icon: 'bi-fire', name: 'Yangın Sensörü', desc: 'Erkek yurdunda her odada yangın fiskiyesi erkek yurdumuzda katlarda itfaye hortumu mevcuttur.' }
  ];

}
