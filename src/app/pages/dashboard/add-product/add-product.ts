import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-product.html',
  styleUrl: './add-product.css',
})
export class AddProductComponent {
product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    stock: 0,
    status: 'Active',
    image: null as string | null
  };

  // ছবি প্রিভিউ দেখানোর লজিক
  onImageSelected(event: any) {
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
    console.log('Product Saved:', this.product);
    alert('Product added successfully!');
    // এখানে API কল হবে
  }
}
