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
    let uid = service.getUser()
    let id = uid?.slice(1,-1)
    // console.log(id);
    this.newArr = this.db.list('user/'+ id + this.dbPath)
   
    service.userUid.asObservable().subscribe(d => {
      this.arr2 = d
      // this.arr = this.db.list('user/'+data+this.dbPath)
    })
    
  }

  getWish() {
    return this.newArr
  }


  setWish(data: any) {
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
