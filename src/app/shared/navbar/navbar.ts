// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   imports: [],
//   templateUrl: './navbar.html',
//   styleUrl: './navbar.css',
// })
// export class NavbarComponent {

// }
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // ১. এটি ইমপোর্ট করুন
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive], // ২. এখানে যুক্ত করুন
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  

  authService = inject(AuthService);
// ভবিষ্যতে মোবাইল মেনু ওপেন/ক্লোজ করার লজিক এখানে লিখব
  // ১. মেনু স্ট্যাটাস ট্র্যাক করার জন্য ভেরিয়েবল
  isMenuOpen = false;

  // ২. মেনু ওপেন/ক্লোজ করার ফাংশন
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // ৩. লিংকে ক্লিক করলে মেনু অটোমেটিক বন্ধ হওয়ার জন্য ফাংশন
  closeMenu() {
    this.isMenuOpen = false;
  }
}