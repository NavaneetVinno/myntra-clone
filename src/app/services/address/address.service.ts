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
export class AddressService {
  
  addressPath = '/address';
  addArr: AngularFireList<any> | undefined;

  constructor(private db: AngularFireDatabase) {
    this.addArr = db.list(this.addressPath);
  }
}
