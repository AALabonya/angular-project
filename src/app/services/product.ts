import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // ১. মক ডাটা (ডিফল্ট কিছু প্রোডাক্ট)
  // আমরা signal ব্যবহার করছি যাতে রিয়েল-টাইম আপডেট পাওয়া যায়
  products = signal([
    { id: 1, name: 'Minimalist Desk', category: 'Furniture', price: 299, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1493723843684-a63fe689df56?w=100' },
    { id: 2, name: 'Mechanical Keyboard', category: 'Electronics', price: 89, stock: 45, status: 'Active', image: 'https://images.unsplash.com/photo-1587829741301-dc798b91a603?w=100' }
  ]);

  // ২. প্রোডাক্ট অ্যাড করার ফাংশন
  addProduct(newProduct: any) {
    // বর্তমান লিস্ট নেওয়া
    const currentProducts = this.products();
    
    // নতুন আইডি জেনারেট করা
    const productWithId = { ...newProduct, id: currentProducts.length + 1 };
    
    // লিস্ট আপডেট করা (আগের গুলোর সাথে নতুনটি যোগ)
    this.products.set([...currentProducts, productWithId]);
  }
}