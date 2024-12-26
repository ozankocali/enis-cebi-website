import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomepageComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'facilities', component: FacilitiesComponent },
];
