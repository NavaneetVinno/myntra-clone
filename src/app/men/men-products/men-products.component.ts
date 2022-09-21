import { Component, ElementRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.scss']
})
export class MenProductsComponent implements OnInit {
[x: string]: any;
  products!: Observable<any[]>;
  results:any[] = [];
  flag = false;
  
  constructor(private service: DataServiceService, private el: ElementRef, private router: Router) { 
    service.getMenProducts().subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    this.products = this.service.getMenProducts()
    // console.log(this.results);
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    let doc = this.el.nativeElement.querySelector(".box--products").classList
    console.log(doc);
    
    if(res === "high"){
      // console.log("success");
     this.service.getMenProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     })

      
    } else if(res === "low"){
      // console.log("low success");
      this.service.getMenProducts().subscribe(data => {
        this.results = data.sort((a,b) => a.price - b.price)
        console.log(this.results);
    })
  }
   
  }

  details(i:any, data:any){
    this.service.setProduct(data);
    this.router.navigate(['/details'])
  }

}
