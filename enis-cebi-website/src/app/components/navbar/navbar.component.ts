import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
   public lang: string = "tr"
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['tr', 'en']);
    this.translate.setDefaultLang('tr');
    this.translate.use('tr');
  }
  useLanguage(language: string): void {
    this.translate.use(language);
    this.lang = language;
}
}
