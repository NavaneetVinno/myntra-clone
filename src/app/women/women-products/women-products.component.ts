import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-women-products',
  templateUrl: './women-products.component.html',
  styleUrls: ['./women-products.component.scss']
})
export class WomenProductsComponent implements OnInit {
  [x: string]: any;
  products!: Observable<any[]>;
  results:any[] = [];
  flag = false;
  isSelected: boolean = false;
  selectedIndex!: number | undefined;
  
  constructor(private service: DataServiceService, private el: ElementRef, private router: Router) {
    service.getWomenProducts().subscribe(data => console.log(data))
   }

  ngOnInit(): void {
    this.products = this.service.getWomenProducts();
    console.log(this.results);
  }

  gotoPage(event:any){
    const target = event.target.value;
    if(target === "option1"){
      this.router.navigate(['/men/products']);
    } else if(target === "option2"){
      this.router.navigate(['/women/products']);
    } else if(target === "option3"){
      this.router.navigate(['/kids/products'])
    }
  }

  getValue(e:any, index:number){
    const name = e.target.value;
    this.selectedIndex = e.target.checked ? index : undefined;
    
    this.flag = true;
    if(name === 'Vishudh'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'FASHOR'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'KALINI'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'Libas'){
      this.isSelected = true;
        this.service.getWomenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'AHIKA'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'Anouk'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'HERE&NOW'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'Varanga'){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    }
  }

  findRange(e:any,index:number){
    const val = e.target.value;
    this.flag = true;

    this.selectedIndex = e.target.checked ? index : undefined;
    if(val === "600"){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 250 && arr.price < 600);
        console.log(this.results);
      })
    } else if(val === "800"){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 601 && arr.price < 800);
        console.log(this.results);
      })
    } else if(val === "1400"){
      this.isSelected = true;
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 801 && arr.price < 1400);
        console.log(this.results);
      })
    }
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    let doc = this.el.nativeElement.querySelector(".box--products").classList
    console.log(doc);
    
    if(res === "high"){
      // console.log("success");
     this.service.getWomenProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     })

      
    } else if(res === "low"){
      // console.log("low success");
      this.service.getWomenProducts().subscribe(data => {
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
