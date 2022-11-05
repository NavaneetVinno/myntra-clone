import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddressesService {
  addressPath = "/addresses"
  addressArr: AngularFireList<any> | undefined
  path:any;

  constructor(private db:AngularFireDatabase, private service:AuthService) {
    let uid = service.getUser()
    let id = uid?.slice(1,-1)
    this.path = 'user/'+ id + this.addressPath
    this.addressArr = db.list('user/'+ id + this.addressPath);
   }

   getAddress(){
    return this.addressArr
   }

   setAddress(data:any){
    return this.addressArr?.push(data)
   }

   deleteAddressItem(key:any){
    return this.addressArr?.remove(key);
   }

   deleteAll(){
    return this.addressArr?.remove()
   }
}
