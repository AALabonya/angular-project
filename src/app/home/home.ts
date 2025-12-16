import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
   imports: [CommonModule], // 3. Add CommonModule here so pipes work
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent {
  
  // Data for the "Trending" section
  trendingProducts = [
    {
      id: 1,
      name: "Minimalist Desk",
      price: 299,
      image: "https://images.unsplash.com/photo-1493723843684-a63fe689df56?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      name: "Pro Noise-Cancel",
      price: 149,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      name: "Smart Watch V2",
      price: 199,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
    }
  ];

  // 3. New Data for "Latest News"
  latestNews = [
    {
      id: 1,
      title: "The Future of Remote Work setups in 2025",
      category: "Productivity",
      date: "Dec 12, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=500",
      description: "Discover the ergonomic trends that are shaping home offices around the world."
    },
    {
      id: 2,
      title: "Why Mechanical Keyboards are good for coding",
      category: "Tech Gear",
      date: "Dec 10, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=500",
      description: "A deep dive into switch types and why developers love the tactile feel."
    },
    {
      id: 3,
      title: "Sustainable Materials in Tech Manufacturing",
      category: "Environment",
      date: "Dec 08, 2024",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=500",
      description: "How big tech companies are shifting towards recycled aluminum and plastics."
    }
  ];
}
