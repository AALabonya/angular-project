import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ১. এটি যুক্ত করুন
import { Footer } from '../shared/footer/footer';
import { NavbarComponent } from '../shared/navbar/navbar';


@Component({
  selector: 'app-layout',
  standalone: true, // অ্যাঙ্গুলার ১৭+ হলে এটি অটো থাকে, না থাকলে দিন
  templateUrl: './layout.html',
  styleUrl: './layout.css',
   imports: [RouterOutlet,NavbarComponent,Footer],
  template: `<app-navbar></app-navbar><router-outlet /> <app-footer></app-footer>`,
})
export class MainLayoutComponent {
  // লজিক লাগলে এখানে লিখবেন
}