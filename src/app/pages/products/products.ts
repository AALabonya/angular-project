// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-products',
//   imports: [],
//   templateUrl: './products.html',
//   styleUrl: './products.css',
// })
// export class ProductsComponent{}


import { CommonModule } from '@angular/common'; // 1. Import CommonModule
import { Component } from '@angular/core';

// 2. Define the Product Interface (The shape of your data)
interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // 3. Add CommonModule here so pipes work
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {
  
  // 4. The Data Logic
  products: Product[] = [
    {
      id: 1,
      name: "Minimalist Workstation",
      category: "Furniture",
      price: 299.00,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1493723843684-a63fe689df56?auto=format&fit=crop&q=80&w=800",
      description: "Ergonomic design meets modern aesthetics. Perfect for your home office setup."
    },
    {
      id: 2,
      name: "Alissa Pro Headset",
      category: "Electronics",
      price: 149.00,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
      description: "Noise-cancelling technology with crystal clear audio quality for professionals."
    },
    {
      id: 3,
      name: "Ceramic Coffee Set",
      category: "Lifestyle",
      price: 45.00,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&q=80&w=800",
      description: "Hand-crafted ceramic cups to start your morning with elegance."
    },
    {
      id: 4,
      name: "Mechanical Keychron",
      category: "Electronics",
      price: 89.00,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b91a603?auto=format&fit=crop&q=80&w=800",
      description: "Tactile response and RGB lighting for the ultimate typing experience."
    }
  ];

  // 5. Action Method
  addToCart(product: Product) {
    console.log('Added to cart:', product.name);
    // Future logic: Send this to a CartService
  }
}