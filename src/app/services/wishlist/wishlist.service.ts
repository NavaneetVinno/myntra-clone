import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  public wishlist: any = [];
  num: any;
  dbPath = '/wish';
  listArr: AngularFireList<any> | undefined;
  prod: any;
  currObj: any;
  newArr: AngularFireList<any> | undefined;
  path:any
  getKey:any;
  arr:AngularFireList<any> | undefined;
  arr2:any
  data:any;

  constructor(private db: AngularFireDatabase, private af:AngularFireAuth, private service:AuthService) {
    this.listArr = db.list(this.dbPath);
    this.af.authState.subscribe(data => {
      this.newArr = this.db.list('user/'+ data?.uid + this.dbPath)
      console.log( this.newArr);
    })
    // this.newArr = this.getWish()
    af.currentUser.then(item => {
      console.log(item);
    })
    service.userUid.asObservable().subscribe(d => {
      this.arr2 = d
      // this.arr = this.db.list('user/'+data+this.dbPath)
    })
    // service.listArr?.snapshotChanges().subscribe(datas => {
    //   console.log(this.arr2);
    //   this.data = this.arr2
    //   // datas.forEach(data => {
    //   //   if(data.key == d){
    //   //     this.arr2 = 
    //   //   }
    //   // })
    // })
    // service.getUserId()
    service.currentUserId
  }

  newGetWish(){
    let wishlist: any= []
    this.af.authState.subscribe(async data => {
      wishlist = this.db.list('user/' + data?.uid + this.dbPath)
    })
    
  }

  getWish() {
    // this.listArr = this.db.list(this.dbPath);

    let wishlist: any= []
    this.af.authState.subscribe(data => {
      // console.log('user/'+ data?.uid + this.dbPath);
      
      wishlist = this.db.list('user/'+ data?.uid + this.dbPath)
    })
    console.log(wishlist);
    // const arr = this.db.list('user/'+this.arr2+this.dbPath)
    // return wishlist
    return this.listArr

  }


  setWish(data: any) {
    // return this.newArr?.push(data);
    return this.newArr?.push(data)
  }

  deleteWish(key: any) {
    return this.newArr?.remove(key);
  }

  deleteAllWish() {
    return this.newArr?.remove();
  }
  setProduct(data:any){
    this.prod = data
  }

  getProduct(){
    return this.prod
  }
}
