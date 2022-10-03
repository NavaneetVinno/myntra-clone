import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

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

  constructor(private router:Router, private service:DataServiceService) { }

  ngOnInit(): void {
  }

  details(i:any, productData:any){
    this.service.setProduct(productData);

    this.router.navigate(['/details', productData])
  }

}
