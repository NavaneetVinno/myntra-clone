import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
