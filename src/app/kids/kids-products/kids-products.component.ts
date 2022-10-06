import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isSelected: boolean = false;
  selectedIndex!: number | undefined;
  radioFilter = ["Men","Women","Kids"];
  filterBrands = ["max","H&M","HELLCAT","pspeaches","A.T.U.N.","Kids Ville","Naughty Ninos","CUTECUMBER"];
  filterPrice = ["Rs. 250 to Rs. 550","Rs. 551 to Rs. 900","Rs. 901 to Rs. 1400","Rs. 1400 to Rs. 2100"];
  loader:boolean = false;
  
  constructor(private service: DataServiceService, private el: ElementRef, private router: Router) {
    service.getKidsProducts().subscribe(data => {
      console.log(data)
      this.loader = true
    })
   }

  ngOnInit(): void {
    this.products = this.service.getKidsProducts();
    console.log(this.results);
  }

  getVal(event:any){
    this.flag = true;
    this.results = event;
  }

  getRange(event:any){
    this.flag = true;
    this.results = event
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    
    if(res === "high"){
     this.service.getKidsProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     }) 
    } else if(res === "low"){
      this.service.getKidsProducts().subscribe(data => {
        this.results = data.sort((a,b) => a.price - b.price)
        console.log(this.results);
      })
    }
  }
}
