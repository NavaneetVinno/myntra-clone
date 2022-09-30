import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from 'src/app/data-service.service';
import { Router } from '@angular/router';

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
  // getTransaction!: Observable<any>;

  constructor(private service: DataServiceService, private config: NgbCarouselConfig, private router: Router) {
    config.keyboard = true;
   
   }

  ngOnInit(): void {
    this.product = Array(this.service.getProduct());
    console.log(this.product);
  }

 

  addToWish(data:any){
    console.log(data);
    const fin = this.service.getWish();
    
    this.service.setWish(data);
   
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
    
    this.service.setBag(obj);



    this.router.navigate(['/bag'])
  }

  compare(item:any){
    const arr = this.service.getBag();
    
  }

}
