import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KidsComponent } from './kids/kids.component';
import { MenProductsComponent } from './men/men-products/men-products.component';
import {WomenProductsComponent} from './women/women-products/women-products.component';
import {KidsProductsComponent} from './kids/kids-products/kids-products.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { ProductDetailsComponent } from './product-details/product-details.component'
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthenticationComponent } from './authentication/authentication.component';

const routes: Routes = [
  // { path: '', component: HomeComponent },
  { path: '', component: AuthenticationComponent },
  { path: 'men', component: MenComponent},
  {path: 'men/products', component: MenProductsComponent},
  { path: 'women', component: WomenComponent },
  {path: 'women/products', component: WomenProductsComponent},
  { path: 'kids', component: KidsComponent },
  {path: 'kids/products', component: KidsProductsComponent},
  {path: 'details', component: ProductDetailsComponent},
  {path: 'wishlist', component: WishlistComponent},
  {path: 'bag', component: BagComponent},
  {path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
