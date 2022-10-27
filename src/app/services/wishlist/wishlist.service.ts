import { Injectable, OnInit } from '@angular/core';
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
export class WishlistService implements OnInit {
  public wishlist: any = [];
  num: any;
  dbPath = '/wish';
  listArr: AngularFireList<any> | undefined;
  prod: any;
  currObj: any;
  newArr: AngularFireList<any> | undefined;
  path:any
  getKey:any;

  constructor(private db: AngularFireDatabase, private af:AngularFireAuth, private service:AuthService) {
    this.listArr = db.list(this.dbPath);
    this.af.authState.subscribe(data => {
      // console.log(data?.email);
  
      this.findUserObject(data?.email)
    })
  }
  
  ngOnInit(): void {
    this.af.authState.subscribe(data => {
      // console.log(data?.email);
  
      this.findUserObject(data?.email)
    })
  }
  
  findUserObject(mail:any){
    // console.log(this.service.getUser());
    
    this.service.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        const pay = data.payload.val().email;
        if(pay === mail){
          // console.log(data);
          this.currObj = data.key
          // this.path = 'user/' + data.key + this.dbPath
          this.newArr = this.db.list('user/'+ data.key + this.dbPath)
        }
      })
    })
  }

  getWish() {
    return this.listArr
    // this.getObj(this.newArr)
  }

  getAll(){
    // return this.db.list('user/' + this.currObj + this.dbPath).snapshotChanges().pipe(
    //   map((products: any[]) => products.map(prod => {
    //     const payload = prod.payload.val();
    //     const key = prod.key;
    //     return <any>{ key, ...payload };
    //   })),
    // );
    
  }

  setWish(data: any) {
    return this.newArr?.push(data);
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
