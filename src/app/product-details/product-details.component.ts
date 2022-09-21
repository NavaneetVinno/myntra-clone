import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product:any;
  myArr = [];

  constructor(private service: DataServiceService, private config: NgbCarouselConfig) {
    config.keyboard = true;
   
   }

  ngOnInit(): void {
    // service.getProduct().subscribe((data: any[]) => this.object = data)
    this.product = this.service.getProduct();
    console.log(this.product);

    // this.getArray()
  }

  // getArray(){
  //   for(let i in this.object){
  //     console.log(this.object[i]);
  //     this.myArr.push(this.object[i]);
  //   }
  // }

}
