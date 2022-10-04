import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from 'src/app/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnapshotAction } from '@angular/fire/compat/database';

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
  arr:any;
  getData:any;
  lists!:any[];
  bag!:any[];
  // getTransaction!: Observable<any>;

  constructor(private service: DataServiceService, private config: NgbCarouselConfig, private router: Router,private route: ActivatedRoute) {
    config.keyboard = true;
    this.route.params.subscribe(params => {
      console.log(params);
      
      // In a real app: dispatch action to load the details here.
   });
   }

  ngOnInit(): void {
    this.product = Array(this.service.getProduct());
    console.log(this.product);
    // this.wishlistItems = Array(this.service.getWish()?.snapshotChanges().subscribe(data =>  console.log(data.values().next())))
    // console.log(this.wishlistItems);
    // this.arr = this.service.getDatas()
    // this.getData = this.service.getWish()?.query.get()
    // console.log(this.getData);
    // const id = this.route.params;
    // console.log(id);
    this.lists = []
    this.service.getWish()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let d = data.payload.toJSON()
        this.lists.push(d)
      })
    })
    
    this.bag = [];
    this.service.getBag()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let d = data.payload.toJSON()
        this.bag.push(d)
        console.log(this.bag);
      })
    })
    
  }

  addToWish(data:any){
    console.log(data);
    let f;
    this.lists.forEach(d => {
      if(d.productId == data.productId){
        f = true;
      } else {
        f = false;
      }
    })
    console.log(f);
    if(!f){
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
    this.bag.forEach(item => {
      if(item.description == obj.description && item.size == obj.size){
        flag = true;
      } else {
        flag = false;
      }
    })
    // console.log(flag);
    if(!flag){
      this.service.setBag(obj);
    }
    // this.router.navigate(['/bag'])
  }

  compare(item:any){
    const arr = this.service.getBag();
    
  }

}
