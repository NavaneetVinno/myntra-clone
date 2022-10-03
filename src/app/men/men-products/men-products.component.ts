import { Component, ElementRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
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
  filterProducts:any[] = [];
  flag = false;
  wish = 1;
  wishArr:any = [];
  isSelected: boolean = false;
  selectedIndex!: number | undefined;
  joined!:any[];
  datas:any;
  flag2 = false;
  radioFilter = ["Men","Women","Kids"];
  filterBrands = ["Dennis Lingo","HERE&NOW","Roadster","HIGHLANDER","WROGN","Mast & Harbour","The Indian Garage Co","WILD WEST"];
  filterPrice = ["Rs. 450 to Rs. 629","Rs. 630 to Rs. 900","Rs. 901 to Rs. 1400"];
  
  constructor(private service: DataServiceService, private el: ElementRef, private router: Router) { 
    service.getMenProducts().subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    this.products = this.service.getMenProducts()
    this.service.getWish()?.snapshotChanges().subscribe(
      data => this.datas = data
    )
    this.fn();
  }

 fn(){
  
 }

  getVal(event:any){
    this.flag = true;
    this.results = event
  }

  getRange(event:any){
    this.flag = true;
    this.results = event
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    if(res === "high"){
     this.service.getMenProducts().subscribe(data => {
      this.results = data.sort((a,b) => b.price - a.price)
      console.log(this.results);
     })
    } else if(res === "low"){
      this.service.getMenProducts().subscribe(data => {
        this.results = data.sort((a,b) => a.price - b.price)
        console.log(this.results);
      })
    }
  }

  

  addWish(i:any,data: any){
    console.log(data);
    let datas:any[] = Array.of(data)
    this.wishArr.push(data)
    this.wish = this.wish+1;
    console.log(this.wishArr);
  }

}
