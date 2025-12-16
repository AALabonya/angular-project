
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { RouterLink } from '@angular/router';
import { ProductService } from '../../../services/product';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
 templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductListComponents {
  productService = inject(ProductService);
  
  // সিগন্যাল থেকে ভ্যালু রিড করার জন্য () ব্যবহার করব HTML এ
}