import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
// 1. Company Statistics
  stats = [
    { label: 'Years of Innovation', value: '12+' },
    { label: 'Happy Customers', value: '50k+' },
    { label: 'Products Shipped', value: '150k' },
    { label: 'Team Members', value: '45' }
  ];

  // 2. Team Members Data
  team = [
    {
      name: "Alissa Doe",
      role: "Founder & CEO",
      bio: "Visionary leader with 15 years in ergonomic design. Believes that a good desk setup changes how you think.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Mark T.",
      role: "Head of Product",
      bio: "Obsessed with mechanical keyboards and wood grain textures. Ensures every product meets our gold standard.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Sarah Lin",
      role: "Lead Designer",
      bio: "Minimalist at heart. Creates the clean, functional aesthetics that Alissa Works is known for.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "David K.",
      role: "Tech Support Lead",
      bio: "The problem solver. If your standing desk motor makes a noise, David knows exactly why.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400"
    }
  ];
}