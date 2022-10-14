import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { DatasService } from '../services/datas/datas.service';
// import { DataServiceService } from '../data-service.service';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any;
  @Input() boo!:boolean;
  @Input() fun:any;
  @Input() class:any;
  @Input() cls:any;
  wishBtn:any;

  constructor(private router:Router, private service:WishlistService, private service2:DatasService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    // this.db.list('/wish').valueChanges().subscribe(data => {
    //   // console.log(data);
    //   this.wishBtn = data
    //   this.wishBtn.map((data: any) => {
    //     console.log(data);
    //     data.wishProd = true;
    //   })
    // });
    // this.find()
  }

  find(){
    this.wishBtn.map((data: any) => {
      console.log(data);
    })
  }

  addToWish(prod:any){
      prod.wishProd = true;
      delete prod.key;
      this.service.setWish(prod)
      const p = prod.productId
      console.log(prod.productId);
      
  }

  remove(prod:any){
      prod.wishProd = false;
      console.log(prod.$key);
  }

  details(i:any, productData:any){
    this.service.setProduct(productData);
    this.router.navigate(['/details', productData])
  }

}
