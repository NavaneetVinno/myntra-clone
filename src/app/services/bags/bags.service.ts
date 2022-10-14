import { EventEmitter, Injectable, Output } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  public prod: any;
  public wishlist: any = [];
  num: any;

  bagPath = '/bags';
  bagArr: AngularFireList<any> | undefined;
  addressPath = "/address"
  addArr : AngularFireList<any> | undefined

  constructor(private db: AngularFireDatabase) {
    this.bagArr = db.list(this.bagPath);
    this.addArr = db.list(this.addressPath);
  }

  getBag() {
    return this.bagArr;
  }

  setBag(data: any) {
    return this.bagArr?.push(data);
  }

  deleteBagItem(key: any) {
    return this.bagArr?.remove(key);
  }

  deleteBag() {
    return this.bagArr?.remove();
  }

  setDetails(data:any){
    return this.addArr?.push(data)
  }

  setTotalItem(data: any) {
    this.num = data;
  }

  getTotalItem() {
    return this.num;
  }
}
