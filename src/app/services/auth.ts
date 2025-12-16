import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // ১. সিগন্যাল ব্যবহার করছি (Modern Angular)
  // ডিফল্টভাবে 'false' মানে ইউজার লগইন নেই
  isLoggedIn = signal<boolean>(false); 

  constructor() { }

  // লগইন ফাংশন (টেস্টিংয়ের জন্য)
  login() {
    this.isLoggedIn.set(true);
  }

  // লগআউট ফাংশন
  logout() {
    this.isLoggedIn.set(false);
  }
}