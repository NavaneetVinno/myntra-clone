import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DatasService } from '../services/datas/datas.service';
import { ToasterService } from '../services/toaster/toaster.service';
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

  constructor(private router:Router, private service:WishlistService, private service2:DatasService, private db: AngularFireDatabase, private toast: ToasterService) { }

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
    window.scroll({top:0,left:0,behavior:'smooth'})
  }
  
  getAll(){
    this.service.getWish()?.snapshotChanges().subscribe(datas => {
      datas.map(data => {
        console.log(data.payload.val());
      })
    })
  }


  addToWish(prod:any){
    this.toast.successMessage("Item is added to wish list")
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
    this.toast.warningMessage("Item is removed from wishlist")
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
    window.scroll({top:0,left:0,behavior:'smooth'})
  }

  details(i:any, productData:any){
    this.service.setProduct(productData);
    this.router.navigate(['/details', productData])
  }

}
