import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  // imports: [RouterOutlet,NavbarComponent,Footer],
  // template: `<app-navbar></app-navbar><router-outlet /> <app-footer></app-footer>`,
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {}
