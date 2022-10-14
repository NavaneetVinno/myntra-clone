import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public prod: any;
  public wishlist: any = [];
  num: any;
  dbPath = '/wish';
  listArr: AngularFireList<any> | undefined;
  bagPath = '/bags';
  bagArr: AngularFireList<any> | undefined;
  addressPath = '/address';
  addArr: AngularFireList<any> | undefined;
  ordersPath = '/orders';
  ordersArr: AngularFireList<any> | undefined;

  constructor(private db: AngularFireDatabase) {
    this.listArr = db.list(this.dbPath);
    this.bagArr = db.list(this.bagPath);
    this.addArr = db.list(this.addressPath);
    this.ordersArr = db.list(this.ordersPath);
  }

  setOrders(data: any) {
    return this.ordersArr?.push(data);
  }

  getOrders() {
    return this.ordersArr;
  }

  deleteOrder(id: any) {
    return this.ordersArr?.remove(id);
  }

  deleteAllOrder() {
    return this.ordersArr?.remove();
  }
}
