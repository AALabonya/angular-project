// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-blog',
//   imports: [],
//   templateUrl: './blog.html',
//   styleUrl: './blog.css',
// })
// export class BlogComponent{

// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class BlogComponent {
  
  // The big article at the top
  featuredPost: BlogPost = {
    id: 1,
    title: "The Future of Remote Work: Trends to Watch in 2025",
    excerpt: "As hybrid models become the norm, we explore the technologies and furniture trends that are shaping home offices around the globe.",
    image: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=1200",
    author: "Alissa Doe",
    date: "Dec 15, 2025",
    category: "Productivity",
    readTime: "5 min read"
  };

  // The list of articles
  recentPosts: BlogPost[] = [
    {
      id: 2,
      title: "Mechanical vs. Membrane: Choosing the Right Keyboard",
      excerpt: "The eternal debate for developers. We break down the switch types, actuation forces, and sound profiles to help you decide.",
      image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=600",
      author: "John Smith",
      date: "Dec 10, 2025",
      category: "Tech Gear",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "5 Ergonomic Mistakes You Are Probably Making",
      excerpt: "Back pain isn't normal. Learn how to adjust your monitor height and chair position to work pain-free.",
      image: "https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&q=80&w=600",
      author: "Dr. Sarah Lee",
      date: "Dec 08, 2025",
      category: "Health",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Minimalist Desk Setup Guide",
      excerpt: "How to declutter your physical space to declutter your mind. A step-by-step guide to minimalism.",
      image: "https://images.unsplash.com/photo-1486946255434-2466348c2166?auto=format&fit=crop&q=80&w=600",
      author: "Alissa Doe",
      date: "Dec 01, 2025",
      category: "Design",
      readTime: "6 min read"
    }
  ];

  categories = ['Technology', 'Lifestyle', 'Productivity', 'Workspace', 'Health'];
  tags = ['Desk Setup', 'Angular', 'Remote Work', 'Coding', 'Office'];
}