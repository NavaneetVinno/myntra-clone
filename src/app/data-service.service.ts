import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  public prod : any;
  public wishlist:any = []
  dbPath = "/wish"
  listArr : AngularFireList<any> | undefined

  constructor(private db: AngularFireDatabase) { 
    this.listArr = db.list(this.dbPath);
  }

  getWish(){
    return this.listArr;
  }

  setWish(data:any){
    return this.listArr?.push(data)
  }

  deleteWish(key:any){
    return this.listArr?.remove(key);
  }

  deleteAllWish(){
    return this.listArr?.remove()
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
    console.log(this.prod);
  }

  getProduct(){
    return this.prod
  }

  // setWishlist(data:any){
  //   this.wishlist.push(data)
  //   console.log(this.wishlist);
  //   localStorage.setItem("wishlist", JSON.stringify(this.wishlist))
  // }

  // getWishlist(){
  //   console.log(this.wishlist);
  //   const res = JSON.parse(localStorage.getItem("wishlist")|| '{}') 
  //   return res;
  // }
}
