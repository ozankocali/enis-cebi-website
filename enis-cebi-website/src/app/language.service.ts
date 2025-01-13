import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private translateService: TranslateService,
    private cookieService: CookieService
  ) {}

  initializeLanguage(): void {
    const lang = this.cookieService.get('language') || 'tr'; 
    this.translateService.use(lang);
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.cookieService.set('language', lang, { expires: 30 }); 
  }

  getCurrentLanguage(): string {
    return this.translateService.currentLang;
  }
}
