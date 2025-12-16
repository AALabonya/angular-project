import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './shared/footer/footer';
import { NavbarComponent } from './shared/navbar/navbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,Footer],
  template: `<app-navbar></app-navbar><router-outlet /> <app-footer></app-footer>`,
})
export class AppComponent {}
