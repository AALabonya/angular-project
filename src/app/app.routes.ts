// import { Routes } from '@angular/router';

// export const routes: Routes = [];


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { BlogComponent } from './pages/blog/blog';
import { ContactComponent } from './pages/contact/contact';
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
  // fallback (optional but recommended)
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
