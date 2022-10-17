import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DatasService } from '../services/datas/datas.service';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input() products: any;
  @Input() boo!:boolean;
  @Input() fun:any;
  @Input() class:any;
  @Input() cls:any;
  @Input() section!:string;
  wishBtn:any;
  // foo = false;
  pros:any

  constructor(private router:Router, private service:WishlistService, private service2:DatasService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    // this.db.list('/wish').valueChanges().subscribe(data => {
    //   // console.log(data);
    //   this.wishBtn = data
    //   this.wishBtn.map((data: any) => {
    //     console.log(data);
    //     data.wishProd = true;
    //   })
    // });
    // this.getAll()
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      this.pros = datas.map(data => data.payload.val())
      // console.log(this.pros);
    })
    // console.log(this.section);
  }
  
  getAll(){
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      datas.map(data => {
        console.log(data.payload.val());
      })
    })
  }


  addToWish(prod:any){
    let path:any;
    if(this.section == 'men'){
      path = '/data'
    } else if (this.section == 'women'){
      path = '/women'
    } else if(this.section == 'kids'){
      path = '/kids'
    }
    this.db.database.ref(path+'/'+prod.key).update({wishProd: true})
    delete prod.key;
    this.service.setWish(prod)
    
  }

  remove(prod:any){
    let path:any;
    if(this.section == 'men'){
      path = '/data'
    } else if (this.section == 'women'){
      path = '/women'
    } else if(this.section == 'kids'){
      path = '/kids'
    }
    this.db.database.ref(path+'/'+prod.key).update({wishProd: false})
    this.service.getWish()?.snapshotChanges().forEach(datas => {
      datas.forEach(data => {
        let val = data.payload.val();
        if(prod.productId == val.productId){
          this.service.deleteWish(data.key)
        }
      })
    })
    window.location.reload()
  }

  details(i:any, productData:any){
    this.service.setProduct(productData);
    this.router.navigate(['/details', productData])
  }

}
