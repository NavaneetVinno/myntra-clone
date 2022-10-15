import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DatasService } from 'src/app/services/datas/datas.service';

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
  radioFilter = ["Men","Women","Kids"];
  filterBrands = ["Vishudh","FASHOR","KALINI","Libas","AHIKA","Anouk","HERE&NOW","Varanga"];
  filterPrice = ["Rs. 250 to Rs. 600","Rs. 601 to Rs. 800","Rs. 801 to Rs. 1400"];
  loader:boolean = false;
  women = "women"
  
  constructor(private service: DatasService, private el: ElementRef, private router: Router) {
    service.getWomenProducts().subscribe(data =>{
      console.log(data);
      this.loader = true;
    })
   }

  ngOnInit(): void {
    this.products = this.service.getWomenProducts()
    console.log(this.results);
    this.loader = false;
  }

  getVal(event:any){
    this.flag = true;
    this.results = event
  }

  getRange(event:any){
    this.flag = true;
    this.results = event;
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    if(res === "high"){
     this.service.getWomenProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     })
    } else if(res === "low"){
      this.service.getWomenProducts().subscribe(data => {
        this.results = data.sort((a,b) => a.price - b.price)
        console.log(this.results);
      })
    }
  }

  

}
