import { Component, ElementRef, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { DatasService } from 'src/app/services/datas/datas.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-men-products',
  templateUrl: './men-products.component.html',
  styleUrls: ['./men-products.component.scss']
})
export class MenProductsComponent implements OnInit {
[x: string]: any;
  products!: Observable<any> | any;
  results:any[] = [];
  filterProducts:any[] = [];
  flag = false;
  wish = 1;
  wishArr:any = [];
  isSelected: boolean = false;
  selectedIndex!: number | undefined;
  joined!:any[];
  datas:any = []
  flag2 = false;
  radioFilter:any = ["Men","Women","Kids"];
  filterBrands = ["Dennis Lingo","HERE&NOW","Roadster","HIGHLANDER","WROGN","Mast & Harbour","The Indian Garage Co","WILD WEST"];
  filterPrice = ["Rs. 450 to Rs. 629","Rs. 630 to Rs. 900","Rs. 901 to Rs. 1400"];
  loader:boolean = false;
  men = "men";
  constructor(private service: DatasService, private el: ElementRef, private router: Router, private toast: ToasterService) { 
    // service.getMenProducts().subscribe(data => {
    //   console.log(data)
    //   this.loader = true
    // })
  }

  ngOnInit(): void {
    this.products = this.service.getMenProducts()
    
    // this.service.getWish()?.snapshotChanges().subscribe(
    //   data => {
    //     this.datas = data;
    //     this.loader = true;
    //   }
    // )
    // this.loader=true;
    this.fn();
  }

 fn(){
  this.service.getMenProducts().subscribe(d => {
    // console.log(d);
    this.loader = true;
    d.map(da => {
      // da["wishProd"] = false;
    })
    // console.log(d);
    this.datas = d;
    // console.log(this.datas);
  })
 }

  getVal(event:any){
    // this.loader = true;
    this.flag = true;
    this.results = event
    // this.loader = false
  }

  getRange(event:any){
    // this.loader = true;
    this.flag = true;
    this.results = event
    // this.loader = false
  }

  selectChange(event: any){
    this.loader = true;
    const res = event.value;
    this.flag = true;
    if(res === "high"){
     this.service.getMenProducts().subscribe(data => {
      data.map(da => {
        da["wishProd"] = false;
      })
      this.results = data.sort((a,b) => b.price - a.price)
      this.loader = true;
     })
    } else if(res === "low"){
      this.service.getMenProducts().subscribe(data => {
        data.map(da => {
          da["wishProd"] = false;
        })
        this.results = data.sort((a,b) => a.price - b.price)
        this.loader = true;
      })
    }
    this.loader = false;
    this.toast.successMessage("Sorted by price successfully")
  }

  // addWish(i:any,data: any){
  //   console.log(data);
  //   let datas:any[] = Array.of(data)
  //   this.wishArr.push(data)
  //   this.wish = this.wish+1;
  //   console.log(this.wishArr);
  // }
}
