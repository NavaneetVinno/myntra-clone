import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public prod: any;
  public wishlist: any = [];
  num: any;
  ordersPath = '/orders';
  ordersArr: AngularFireList<any> | undefined;
  newOrders:AngularFireList<any> | undefined;

  constructor(private db: AngularFireDatabase, private service:AuthService) {
    this.ordersArr = db.list(this.ordersPath);
    let uid = service.getUser()
    let id = uid?.slice(1,-1)
    this.newOrders = db.list('user/' + id + this.ordersPath)
  }

  setOrders(data: any) {
    return this.newOrders?.push(data);
  }

  getOrders() {
    return this.newOrders;
  }

  deleteOrder(id: any) {
    return this.newOrders?.remove(id);
  }

  deleteAllOrder() {
    return this.newOrders?.remove();
  }

}
