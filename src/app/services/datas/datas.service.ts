import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatasService {


  constructor(private db: AngularFireDatabase) {
    
  }

  // Men section------------------
  // -------------------------

  setMenProducts(item:any){
    this.db.list('/data').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          // console.log(key);
          this.db.object('/data/'+key).update({wishProd:true})
        }
      })
    })
  }
  removeMenProducts(item:any){
    this.db.list('/data').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          this.db.object('/data/'+key).update({wishProd:false})
          
        }
      })
    })
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

  // Women section-------------------------------------
  // --------------------------------------

  setWomenProducts(item:any){
    return this.db.list('/women').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          console.log(key);
          this.db.object('/women/'+key).update({wishProd:true})
        }
      })
    })
  }
  removeWomenProducts(item:any){
    return this.db.list('/women').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          this.db.object('/women/'+key).update({wishProd:false})
        }
      })
    })
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

  // kids section-------------------------------------------
  // --------------------------------------

  setKidsProducts(item:any){
    return this.db.list('/kids').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          console.log(key);
          this.db.object('/kids/'+key).update({wishProd:true})
        }
      })
    })
  }
  removeKidsProducts(item:any){
    return this.db.list('/kids').snapshotChanges().forEach(datas => {
      datas.forEach(da => {
        let dataVal:any = da.payload.val()
        let key = da.key
        if(item.productId == dataVal.productId){
          this.db.object('/kids/'+key).update({wishProd:false})
        }
      })
    })
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
