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
  }

  ngOnInit(): void {
    this.products = this.service.getMenProducts()
    
   
    this.fn();
  }

 fn(){
  this.service.getMenProducts().subscribe(d => {
    this.loader = true;
    this.datas = d;
  })
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

}
