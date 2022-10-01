import { Component, ElementRef, OnInit } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
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
  // arr!:any[];
  joined!:any[];
  datas:any;
  
  constructor(private service: DataServiceService, private el: ElementRef, private router: Router) { 
    service.getMenProducts().subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    
    this.products = this.service.getMenProducts()
    // console.log(this.results);
    this.service.getWish()?.snapshotChanges().subscribe(
      data => this.datas = data
    )
    // console.log(p);
    // forkJoin([
    //   this.service.getMenProducts(),
    //   this.service.getWish()
    // ]).subscribe(([arrayOne, arrayTwo]:any) => {
    //   this.joined = arrayOne.map((item: { brand: any; }) => ({
    //     ...arrayTwo.find((t: { arrayOneBrand: any; }) => t.arrayOneBrand === item.brand),
    //     ...item
    //   }));
    //   console.log(this.joined);
    // });
    this.fn();
  }

 fn(){
  // const intersection = this.datas.filter((element: any) => this.products.includes(element));
  console.log(this.products);
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

  getValue(e:any,index:number){
    const name = e.target.value;
    this.selectedIndex = e.target.checked ? index : undefined;
    
    this.flag = true;
    if(name === 'WROGN'){
      this.isSelected = true;
      
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'Roadster'){
      this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'HIGHLANDER'){
      this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'HERE&NOW'){
      this.isSelected = true;
        this.service.getMenProducts().subscribe(data => {
          this.results = data.filter(arr => arr.brand == name)
        })
    } else if(name === 'Dennis Lingo'){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'Mast & Harbour'){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'The Indian Garage Co'){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    } else if(name === 'WILD WEST'){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.brand == name)
      })
    }
  }

  findRange(e:any,index:number){
    const val = e.target.value;
    this.flag = true;

    this.selectedIndex = e.target.checked ? index : undefined;
    if(val === "630"){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 450 && arr.price < 629);
        console.log(this.results);
      })
    } else if(val === "900"){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 630 && arr.price < 900);
        console.log(this.results);
      })
    } else if(val === "1400"){
      this.isSelected = true;
      this.service.getMenProducts().subscribe(data => {
        this.results = data.filter(arr => arr.price > 901 && arr.price < 1400);
        console.log(this.results);
      })
    }
  }

  selectChange(event: any){
    const res = event.value;
    this.flag = true;
    // let doc = this.el.nativeElement.querySelector(".box--products").classList
    // console.log(doc);
    
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

  details(i:any, productData:any){
    this.service.setProduct(productData);

    this.router.navigate(['/details', productData])
  }

  addWish(i:any,data: any){
    console.log(data);
    let datas:any[] = Array.of(data)
    this.wishArr.push(data)
    // const btn = document.querySelector(".wish--btn");
    // btn?.classList.toggle("bi-heart-fill")
    this.wish = this.wish+1;
    console.log(this.wishArr);
    // this.service.setWishlist(data);

    // this.wishArr.find((arr: { key: any; }) => arr.key === data.key ? 'true' : 'false')
    
  }

}
