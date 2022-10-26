import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/compat/database';
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
  currObj:any
  newArr: AngularFireList<any> | undefined;

  constructor(private db: AngularFireDatabase, private af:AngularFireAuth, private service:AuthService) {
    this.listArr = db.list(this.dbPath);
    af.authState.subscribe(data => {
      // console.log(data?.email);
      this.findUserObject(data?.email)
    })
  }

  findUserObject(mail:any){
    this.service.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        const pay = data.payload.val().email;
        if(pay === mail){
          // console.log(data);
          this.currObj = data.key
          // console.log(this.currObj);
          this.newArr = this.db.list('user/'+ this.currObj + this.dbPath)
          // this.newArr.snapshotChanges().subscribe(datas => {
          //   datas.forEach(data => {
          //     console.log(data.payload.val());
          //   })
          // })
        }
      })
    })
    // console.log(JSON.stringify(this.currObj));
  }

  getWish() {
    return this.listArr;
  }

  setWish(data: any) {
    return this.newArr?.push(data);
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
