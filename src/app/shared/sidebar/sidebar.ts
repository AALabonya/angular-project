import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {
  
  // মেনু ডাটা (আপনার যত খুশি মেনু এখানে যোগ করুন)
  menuItems = [
    {
      title: 'Dashboard',
      icon: 'home',
      route: '/dashboard',
      isOpen: false
    },
    {
      title: 'E-commerce',
      icon: 'shopping-bag', // Parent Menu
      isOpen: false,        // Dropdown status
      children: [           // Sub-menus
        { title: 'Products List', route: '/products' },
        { title: 'Add Product', route: '/products/add' },
        { title: 'Categories', route: '/products/categories' },
        { title: 'Orders', route: '/orders' }
      ]
    },
    {
      title: 'Users & Auth',
      icon: 'users',
      isOpen: false,
      children: [
        { title: 'All Users', route: '/users' },
        { title: 'Roles & Permissions', route: '/users/roles' },
        { title: 'Banned Users', route: '/users/banned' }
      ]
    },
    {
      title: 'Reports & Analytics',
      icon: 'chart',
      route: '/reports',
      isOpen: false
    },
    {
      title: 'Settings',
      icon: 'settings',
      isOpen: false,
      children: [
        { title: 'General', route: '/settings/general' },
        { title: 'Security', route: '/settings/security' },
        { title: 'Notifications', route: '/settings/notifications' }
      ]
    }
  ];

  // সাব-মেনু ওপেন/ক্লোজ করার ফাংশন
  toggleSubmenu(item: any) {
    // অন্যগুলো বন্ধ করে শুধু ক্লিক করাটা ওপেন করবে (Accordion Style)
    this.menuItems.forEach(menu => {
      if (menu !== item) {
        menu.isOpen = false;
      }
    });
    item.isOpen = !item.isOpen;
  }
}