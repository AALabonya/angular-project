// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// @Component({
//   selector: 'app-add-product',
//   imports: [FormsModule, CommonModule],
//   templateUrl: './add-product.html',
//   styleUrl: './add-product.css',
// })
// export class AddProductComponent {
// product = {
//     name: '',
//     description: '',
//     price: 0,
//     category: '',
//     stock: 0,
//     status: 'Active',
//     image: null as string | null
//   };

//   // ছবি প্রিভিউ দেখানোর লজিক
//   onImageSelected(event: any) {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.product.image = e.target.result;
//       };
//       reader.readAsDataURL(file);
//     }
//   }

//   saveProduct() {
//     console.log('Product Saved:', this.product);
//     alert('Product added successfully!');
//     // এখানে API কল হবে
//   }
// }
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // ১. Router ইমপোর্ট
import { ProductService } from '../../../services/product';


@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProductComponent {
  
  // ৩. ইনজেক্ট করুন
  productService = inject(ProductService);
  router = inject(Router);

  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    status: 'Active',
    image: null as string | null
  };

  onImageSelected(event: any) {
    // ... আপনার আগের কোড ঠিক আছে ...
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.product.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  saveProduct() {
    // ৪. সার্ভিসের মাধ্যমে ডাটা সেভ করুন
    this.productService.addProduct(this.product);
    
    alert('Product added successfully!');
    
    // ৫. সেভ হওয়ার পর ইউজারকে 'Product List' পেজে পাঠিয়ে দিন
    this.router.navigate(['/dashboard/products']);
  }
}