import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../language.service';
import { last } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public lang: string = "tr"
  constructor(private languageService: LanguageService) {
    this.lang = this.languageService.getCurrentLanguage()

  }
  
  useLanguage(lang: string): void {
    this.languageService.setLanguage(lang); // Kullanıcı seçimini uygula
    this.lang = this.languageService.getCurrentLanguage()
  }

  getLanguageName(langCode: string): string {
    switch (langCode) {
      case 'en':
        return 'English';
      case 'tr':
        return 'Türkçe';
      case 'ar':
        return 'Arabic';
      default:
        return 'Unknown Language';
    }
  }
}
