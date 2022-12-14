import { Component, ElementRef, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-kids-products',
  templateUrl: './kids-products.component.html',
  styleUrls: ['./kids-products.component.scss']
})
export class KidsProductsComponent implements OnInit {
  [x: string]: any;
  products!: Observable<any[]>;
  results:any[] = [];
  flag = false;
  
  constructor(private service: DataServiceService, private el: ElementRef) {
    service.getKidsProducts().subscribe(data => console.log(data))
   }

  ngOnInit(): void {
    this.products = this.service.getKidsProducts();
    console.log(this.results);
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    let doc = this.el.nativeElement.querySelector(".box--products").classList
    console.log(doc);
    
    if(res === "high"){
      // console.log("success");
     this.service.getKidsProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     })

      
    } else if(res === "low"){
      // console.log("low success");
      this.service.getKidsProducts().subscribe(data => {
        this.results = data.sort((a,b) => a.price - b.price)
        console.log(this.results);
    })
  }
   
  }

}
