import { Injectable } from '@angular/core';
// import {HttpClient} from '@angular/common/http'
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public prod : any;
  public wishlist:any = []
  num: any;
  dbPath = "/wish"
  listArr : AngularFireList<any> | undefined
  bagPath = "/bags"
  bagArr : AngularFireList<any> | undefined
  addressPath = "/address"
  addArr : AngularFireList<any> | undefined
  ordersPath = "/orders"
  ordersArr : AngularFireList<any> | undefined

  constructor(private db: AngularFireDatabase) { 
    this.listArr = db.list(this.dbPath);
    this.bagArr = db.list(this.bagPath);
    this.addArr = db.list(this.addressPath);
    this.ordersArr = db.list(this.ordersPath);
  }

  // getDatas(){
  //   return this.http.get('https://myntra-men-data-default-rtdb.firebaseio.com/wish')
  // }

  setOrders(data:any){
    return this.ordersArr?.push(data);
  }

  getOrders(){
    return this.ordersArr;
  }

  deleteOrder(id:any){
    return this.ordersArr?.remove(id);
  }

  getWish(){
    return this.listArr;
  }

  getBag(){
    return this.bagArr
  }

  getDetails(){
    return this.addArr;
  }

  setDetails(data:any){
    return this.addArr?.push(data)
  }

  setWish(data:any){
    return this.listArr?.push(data)
  }

  setBag(data:any){
    return this.bagArr?.push(data);
  }

  deleteWish(key:any){
    return this.listArr?.remove(key);
  }

  deleteBagItem(key: any){
    return this.bagArr?.remove(key)
  }

  deleteAllWish(){
    return this.listArr?.remove()
  }

  deleteBag(){
    return this.bagArr?.remove()
  }

  getMenProducts(){
    return this.db.list('/data').snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{ key, ...payload };
      })),
    );
  }

  getWomenProducts(){
    return this.db.list('/women').snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload};
      }))
    )
  }

  getKidsProducts(){
    return this.db.list('/kids').snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload};
      }))
    )
  }

  setProduct(data:any){
    this.prod = data
    // console.log(this.prod);
  }

  getProduct(){
    return this.prod
  }

  setTotalItem(data:any){
    this.num = data;
    // console.log(this.num);
  }

  getTotalItem(){
    // console.log(this.num);
    return this.num;
  }
}
