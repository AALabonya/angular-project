import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
})
export class OverviewComponent {
// আগের Stats এবং Orders এর ডাটা এখানে নিয়ে আসুন
 // Mock Data for Stats Cards
  stats = [
    { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', icon: 'dollar', color: 'bg-green-100 text-green-600' },
    { label: 'Active Users', value: '+2350', change: '+180.1%', icon: 'users', color: 'bg-blue-100 text-blue-600' },
    { label: 'New Orders', value: '+12,234', change: '+19%', icon: 'shopping-bag', color: 'bg-purple-100 text-purple-600' },
    { label: 'Pending Items', value: '5', change: '-2%', icon: 'box', color: 'bg-orange-100 text-orange-600' }
  ];

  // Mock Data for Recent Orders Table
  recentOrders = [
    { id: '#ORD-001', product: 'Minimalist Workstation', customer: 'John Doe', date: 'Oct 24, 2025', amount: '$299.00', status: 'Completed' },
    { id: '#ORD-002', product: 'Mechanical Keychron', customer: 'Sarah Smith', date: 'Oct 23, 2025', amount: '$89.00', status: 'Processing' },
    { id: '#ORD-003', product: 'Alissa Pro Headset', customer: 'Mike Johnson', date: 'Oct 22, 2025', amount: '$149.00', status: 'Completed' },
    { id: '#ORD-004', product: 'Ceramic Coffee Set', customer: 'Emily Davis', date: 'Oct 21, 2025', amount: '$45.00', status: 'Cancelled' },
    { id: '#ORD-005', product: 'Ergo Chair Ultra', customer: 'David Wilson', date: 'Oct 20, 2025', amount: '$599.00', status: 'Processing' },
  ];

  isSidebarOpen = false;

  
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }


}
