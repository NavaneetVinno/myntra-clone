import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
// import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../services/wishlist/wishlist.service';
import { BagsService } from '../services/bags/bags.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  myArr = [];
  flag = false;
  size:number | undefined;
  wishlistItems:any;
  arr:any = []
  getData:any;
  lists!:any[];
  bag!:any[];
  favBtn:boolean = false;
  ex:any;
  favIcon = false;
  lat = false;

  constructor(private service: WishlistService,private service2:BagsService, private config: NgbCarouselConfig, private router: Router,private route: ActivatedRoute) {
    config.keyboard = true;
    this.route.params.subscribe((par: any) => {
      console.log(par);
      this.ex = par;
    })
   }

  ngOnInit(): void {
    this.product = Array(this.service.getProduct());
    let text = this.product[0].productId;
    console.log(text);
    console.log(this.product[0]);

    this.lists = []
    this.service.getWish()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let d = data.payload.toJSON()
        this.lists.push(d)
      })
    })
    console.log(this.lists);
    this.bag = [];
    this.service2.getBag()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let d = data.payload.toJSON()
        this.bag.push(d)
      })
    })
    this.iconChange()
  }
  
  iconChange(){
    this.service.getWish()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let val = data.payload.val();
        if(this.product[0].productId == val.productId){
          console.log("found");
          this.favIcon = true;
          this.lat = true;
        }
      })
    })
  }

  addToWish(data:any){
    // console.log(data);
    delete data.key
    // console.log(data);
    
    if(this.lat == false){
      this.service.setWish(data);
    }
  }

  getSize(el:number,i:any,num:any){
    this.flag = true;
    this.size = el;
    const list = document.getElementById(i)
    list?.classList.add("size--circle")
  }

  addBag(elem:any){
    let id = (new Date()).getTime().toString()
    const obj = {
      id: id,
      title: elem.brand,
      description: elem.additionalInfo,
      size: this.size,
      price: elem.price,
      image: elem.images[0].src,
      discount: elem.discountDisplayLabel,
      qty: 1,
    }
    let flag;
    this.bag.forEach((item: { description: any; size: any; }) => {
      if(item.description == obj.description && item.size == obj.size){
        flag = true;
      } else {
        flag = false;
      }
    })
    if(!flag){
      this.service2.setBag(obj);
    }
  }

}
