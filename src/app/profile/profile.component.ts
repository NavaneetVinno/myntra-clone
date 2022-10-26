import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { OrdersService } from '../services/orders/orders.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ordersProduct:Observable<any> | undefined
  userData:any
  flag = false;
  full:any;
  loader:boolean = false;
  userMail:any;
  currentUser:any
  constructor(private service: OrdersService, private userService:AuthService, private afDatabase:AngularFireDatabase, private af:AngularFireAuth, private router:Router) {
    service.getOrders()?.valueChanges().subscribe((data:any) => {
      this.loader = true;
    })
   }

  ngOnInit(): void {
    this.ordersProduct = this.service.getOrders()?.snapshotChanges().pipe(
      map((products:any []) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )
    this.af.authState.subscribe(data => {
      // console.log(data?.email);
      this.userMail = data?.email
      this.findUser(data?.email)
    })
    this.loader = false;
  }

  findUser(email:any){
    this.userService.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        // console.log(data.payload.val());
        // console.log(data.payload.val().email);
        const pay = data.payload.val().email
        if(pay == email){
          this.currentUser = data.payload.val()
          // console.log(true);
        }
      })
    })
  }

  gotoDiv(n:number){
    if(n == 1){
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  removeItem(key:any){
    this.service.deleteOrder(key);
  }

  modalView(datas:any,data:any){
    
    const details = {
      "delivery": datas.delivery,
      "placed": datas.time,
      "person": datas.address.userName,
      "address": datas.address.address,
      "phone": datas.address.phone,
      "title": data.title,
      "description": data.description,
      "price": data.price,
      "size": data.size,
      "qty": data.qty,
      "discount": data.discount,
      "image": data.image,
    }
    this.full = details
  }

  logout(){
    this.userService.SignOut()
    this.router.navigate(['/'])
  }
}
