// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BlogComponent } from './pages/blog/blog';
import { ContactComponent } from './pages/contact/contact';
import { AddProductComponent } from './pages/dashboard/add-product/add-product';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { OverviewComponent } from './pages/dashboard/overview/overview';
import { About } from './pages/home/about/about';
import { LoginComponent } from './pages/login/login';
import { ProductsComponent } from './pages/products/products';
import { ServicesComponent } from './pages/services/services';
import { SignupComponent } from './pages/signup/signup';


export
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'contact', component: ContactComponent},
 { path: 'about', component: About},
 { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: '', component: OverviewComponent }, // ২. ডিফল্ট (মেইন ড্যাশবোর্ড কন্টেন্ট)
     { path: 'add-product', component: AddProductComponent },
    ]
   },
  
  // fallback (optional but recommended)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
