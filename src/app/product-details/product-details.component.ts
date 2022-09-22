import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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

  constructor(private service: DataServiceService, private config: NgbCarouselConfig, private router: Router) {
    config.keyboard = true;
   
   }

  ngOnInit(): void {
    // service.getProduct().subscribe((data: any[]) => this.object = data)
    this.product = Array(this.service.getProduct());
    console.log(this.product);

    // this.getArray()
  }

  // getArray(){
  //   for(let i in this.object){
  //     console.log(this.object[i]);
  //     this.myArr.push(this.object[i]);
  //   }
  // }

  addToWish(data:any){
    console.log(data);
    this.service.setWishlist(data);
    // this.router.navigate(['/wishlist'])
  }

}
