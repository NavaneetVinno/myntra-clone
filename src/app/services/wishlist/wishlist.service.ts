import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishlist: any = [];
  num: any;
  dbPath = '/wish';
  listArr: AngularFireList<any> | undefined;
  prod: any;

  constructor(private db: AngularFireDatabase) {
    this.listArr = db.list(this.dbPath);
  }

  getWish() {
    return this.listArr;
  }

  setWish(data: any) {
    return this.listArr?.push(data);
  }

  deleteWish(key: any) {
    return this.listArr?.remove(key);
  }

  deleteAllWish() {
    return this.listArr?.remove();
  }
  setProduct(data:any){
    this.prod = data
  }

  getProduct(){
    return this.prod
  }
}
