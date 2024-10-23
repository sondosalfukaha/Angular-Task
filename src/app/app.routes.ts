import { Routes } from '@angular/router';
import { InitialPageComponent } from './initial-page/initial-page.component';
import { SecondComponent } from './second-page/second-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'initial', pathMatch: 'full' },  // Redirect to initial page
  { path: 'initial', component: InitialPageComponent },     // Route for initial page
  { path: 'second', component: SecondComponent },           // Route for second page
];
