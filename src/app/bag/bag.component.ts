import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { reduce } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { Router } from '@angular/router';
import { BagsService } from '../services/bags/bags.service';
import { OrdersService } from '../services/orders/orders.service';
import { ToasterService } from '../services/toaster/toaster.service';
import { CardsService } from '../services/cards/cards.service';
import { AddressesService } from '../services/addresses/addresses.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss'],
  
})
export class BagComponent implements OnInit {
[x: string]: any;
  bagProducts:Observable<any[]> | undefined;
  isEmpty = false;
  total: Observable<Number> | undefined
  itemTotal:any;
  steps: any = 1;
  num: any = 0;
  stepperForm!: FormGroup;
  bag!: any[];
  loader:boolean = false;

  constructor(private service: BagsService, private router: Router, private service2:OrdersService, private toast: ToasterService, private cardService:CardsService, private addService:AddressesService) { 
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
        this.loader = true;
      }
    )

    this.stepperForm = new FormGroup({
      userName: new FormControl(null, Validators.required),
      phone: new FormControl(null, [Validators.required, Validators.minLength(10), Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$")]),
      address: new FormControl(null, Validators.required),
      pin: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(6)]),
      cardNum: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(12)]),
      userCard: new FormControl(null, Validators.required),
      date: new FormControl(null,[ Validators.required]),
      cvv: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]),
    })

    this.total = this.bagProducts?.pipe(
      map(order => order.reduce((total: any,item: any)=> total + item.price,0))
    )

    this.bagProducts?.subscribe(res => {
      this.itemTotal = res.length;
      this.service.setTotalItem(this.itemTotal)
    })
    this.stepIndicator(this.steps - 1);
  }

  getDatas(arr:any,data:any){
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

    const obj = {
      "datas": arr,
      "address": data,
      "time": str,
      "delivery": delivery,
    }
    const card = {
      name: arr.userCard,
      number: arr.cardNum,
      expiry: arr.date,
      cvv: arr.cvv,
    }
    const add = {
      name: arr.userName,
      address: arr.address,
      phone: arr.phone,
      pin: arr.pin,
    }
    this.cardService.setCard(card);
    this.addService.setAddress(add)
    this.service2.setOrders(obj);
    this.deleteAll();
    this.router.navigate(["/home"])
    this.toast.successMessage("Order placed successfully")
  }

  // submit(data:any){
  //   console.log(data);
  //   this.service.setDetails(data)
  // }

  deleteItem(key:any){
    this.toast.errorMessage("This item will be no longer available")
    this.service.deleteBagItem(key)
    window.location.reload()
    // console.log(key)
  }

  deleteAll(){
    this.toast.errorMessage("Your bag is fully empty")
    this.service.deleteBag()
    this.router.navigate(["/home"])
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
  }

  openTab(n: number) {
    this.steps = n;
    this.stepIndicator(n - 1);
  }
}
