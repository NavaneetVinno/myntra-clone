import { EventEmitter, Injectable, Output } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { FirebaseOperation } from '@angular/fire/compat/database/interfaces';
import { map, of } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class BagsService {
  public prod: any;
  public wishlist: any = [];
  num: any;

  bagPath = '/bags';
  bagArr: AngularFireList<any> | undefined;
  newBag: AngularFireList<any> | undefined;
  addressPath = "/address"
  addArr : AngularFireList<any> | undefined;
  newAdd: AngularFireList<any> | undefined;

  constructor(private db: AngularFireDatabase, private service:AuthService, private af:AngularFireAuth) {
    this.bagArr = db.list(this.bagPath);
    this.addArr = db.list(this.addressPath);
    const id = service.getUser()
    console.log(id);
    af.authState.subscribe(data => {
      const id = data?.uid
      console.log(id);
      this.newBag = this.db.list('user/'+ data?.uid + this.bagPath)
      this.newAdd = this.db.list('user/' + data?.uid + this.addressPath)
      // this.findUser(data?.email)
    })
  }

  findUser(mail:any){
    this.service.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        const pay = data.payload.val().email;
        if(pay === mail){
          this.newBag = this.db.list('user/'+ data.key + this.bagPath)
          this.newAdd = this.db.list('user/' + data.key + this.addressPath)
        }
      })
    })
  }

  getBag() {
    return this.newBag
  }

  setBag(data: any) {
    return this.newBag?.push(data);
  }

  deleteBagItem(key: any) {
    return this.newBag?.remove(key);
  }

  deleteBag() {
    return this.newBag?.remove();
  }

  setDetails(data:any){
    return this.newAdd?.push(data)
  }

  setTotalItem(data: any) {
    this.num = data;
  }

  getTotalItem() {
    return this.num;
  }
}
