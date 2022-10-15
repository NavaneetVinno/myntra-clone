import { Component, Input, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map } from 'rxjs';
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
  @Input() section!:string;
  wishBtn:any;
  foo = false;
  pros:any

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
    // this.getAll()
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      this.pros = datas.map(data => data.payload.val())
      console.log(this.pros);
    })
    console.log(this.section);
  }
  
  getAll(){
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      datas.map(data => {
        console.log(data.payload.val());
      })
    })
  }


  addToWish(prod:any){
    prod.wishProd = true;
    if(this.section == "men"){
      this.service2.setMenProducts(prod)
    } else if(this.section == "women"){
      this.service2.setWomenProducts(prod)
    } else if(this.section == "kids"){
      this.service2.setKidsProducts(prod)
    }
    delete prod.key;
      this.service.setWish(prod)
      const p = prod.productId
      console.log(prod.key);
      
  }

  remove(prod:any){
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      datas.map(data => {
        if(prod.productId == data.payload.val().productId){
          console.log(data.payload.key);
          this.service.deleteWish(data.payload.key)
        }
      })
    })
    if(this.section == "men"){
      this.service2.removeMenProducts(prod)
    } else if(this.section == "women"){
      this.service2.removeWomenProducts(prod)
    } else if(this.section == "kids"){
      this.service2.removeKidsProducts(prod)
    }
    
      prod.wishProd = false;
      // console.log(prod.key);
  }

  details(i:any, productData:any){
    this.service.setProduct(productData);
    this.router.navigate(['/details', productData])
  }

}
