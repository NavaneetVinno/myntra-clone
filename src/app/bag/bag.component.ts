import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { reduce } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
  
})
export class BagComponent implements OnInit {
[x: string]: any;
  bagProducts:Observable<any> | undefined;
  isEmpty = false;
  total: Observable<Number> | undefined
  itemTotal!: Observable<Number>;
  steps: any = 1;
  num: any = 0;
  stepperForm!: FormGroup;
  bag!: any[];


  constructor(private service: DataServiceService, private router: Router) { 
    service.getBag()
  }

  ngOnInit(): void {
    this.bagProducts = this.service.getBag()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        this.isEmpty = true;
        const key = prod.key;
        return <any>{ key, ...payload };
      }))
    )

    this.service.getBag()?.valueChanges().subscribe(
      (data:any) => {
        this.bag = data;
        console.log(this.bag);
      }
    )

    this.stepperForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      pin: new FormControl(null, Validators.required),
      cardNum: new FormControl(null, Validators.required),
      userCard: new FormControl(null, Validators.required),
      date: new FormControl(null, Validators.required),
      cvv: new FormControl(null, Validators.required),
      
    })

    this.total = this.bagProducts?.pipe(
      map(order => order.reduce((total: any,item: any)=> total + item.price,0))
    )

    this.bagProducts?.subscribe(res => {
      // console.log(res.length)
      this.itemTotal = res.length;
      // console.log(this.itemTotal);
      this.service.setTotalItem(this.itemTotal)
    })
    this.stepIndicator(this.steps - 1);
  }

  getDatas(arr:any,data:any){
    // console.log(arr);
    // console.log(data);
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    let str:any = dd + '-' + mm + '-' + yyyy;
    
    let deliveryDay: Date = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);
    let da = String(deliveryDay.getDate()).padStart(2, '0');
    let mo = String(deliveryDay.getMonth() + 1).padStart(2, '0');
    let ye = deliveryDay.getFullYear();
    let delivery = da + '-' + mo + '-' + ye;
    
    // console.log(delivery);
    // console.log(str);
    const obj = {
    
      "datas": arr,
      "address": data,
      "time": str,
      "delivery": delivery,
    }
    this.service.setOrders(obj);
    this.deleteAll();
    this.router.navigate(["/"])
  }

  submit(data:any){
    console.log(data);
    this.service.setDetails(data)
  }

  deleteItem(key:any){
    // console.log(key);
    this.service.deleteBagItem(key)
  }

  deleteAll(){
    this.service.deleteBag()?.then(data => console.log(data)).catch(err => console.error(err))
  }

  prevBtn() {
    this.steps = this.steps - 1;
    this.stepIndicator(this.steps - 1);
  }

  nextBtn() {
    this.steps = this.steps + 1;
    this.stepIndicator(this.steps - 1);
  }

  stepIndicator(n: any) {
    // const x = document.querySelectorAll('.step');
    // // console.log(x);
    // for (let i = 0; i < x.length; i++) {
    //   x[i].className = x[i].className.replace(' active', '');
    // }
    // x[n].className += ' active';
  }

  openTab(n: number) {
    this.steps = n;
    this.stepIndicator(n - 1);
  }

}
