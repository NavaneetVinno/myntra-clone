import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {

  constructor(private db: AngularFireDatabase) {}

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
}
