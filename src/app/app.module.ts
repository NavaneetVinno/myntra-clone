import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AngularFireModule} from '@angular/fire/compat'
import {AngularFireDatabaseModule} from '@angular/fire/compat/database'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenProductsComponent } from './men/men-products/men-products.component';
import { WomenProductsComponent } from './women/women-products/women-products.component';
import { KidsProductsComponent } from './kids/kids-products/kids-products.component';
import { environment } from 'src/environments/environment';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BagComponent } from './bag/bag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { FiltersComponent } from './filters/filters.component';
import { LoaderComponent } from './loader/loader.component';
import { SharedModuleModule } from './shared/shared-module/shared-module.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    // FooterComponent,
    HomeComponent,
    MenComponent,
    WomenComponent,
    KidsComponent,
    CarouselComponent,
    MenProductsComponent,
    WomenProductsComponent,
    KidsProductsComponent,
    ProductDetailsComponent,
    WishlistComponent,
    BagComponent,
    ProfileComponent,
    ProductsComponent,
    FiltersComponent,
    LoaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
