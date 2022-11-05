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
  favLogo:boolean = false;
  pros:any
  items:any;
  keys:any[] = []
  dbPath:any;

  constructor(private router:Router, private service:WishlistService, private service2:DatasService, private db: AngularFireDatabase, private toast: ToasterService) {}

  ngOnInit(): void {
    this.getAll()
    
    this.service.getWish()?.snapshotChanges().subscribe((datas:any)  => {
      this.pros = datas.map((data:any)  => data.payload.val())
    })
    window.scroll({top:0,left:0,behavior:'smooth'})
    this.dbPath = this.service2.path
  }
  
  getAll(){
    if(this.section == 'men'){
      this.items = this.service2.getMenProducts().forEach(datas => {
        datas.forEach(data => {
          this.service.getWish()?.valueChanges().subscribe(items => {
            items.forEach(item => {
              if(item.productId == data.productId){
                const k = data.key
                this.favLogo = true
                // this.keys.push(true,k)
                
              } else {
                const k = data.key
                this.favLogo = false
                // this.keys.push(false,k)
              }
            })
            // console.log(this.keys);
          })
        })
      })
    } else if (this.section == 'women'){
      this.items = this.service2.getWomenProducts()
    } else if(this.section == 'kids'){
      this.items = this.service2.getKidsProducts()
    }
    
  }

  addToWish(prod:any){
    this.toast.successMessage("Item is added to wish list")
    let path:any;
    if(this.section == 'men'){
      path = this.dbPath + '/data'
    } else if (this.section == 'women'){
      path = this.dbPath + '/women'
    } else if(this.section == 'kids'){
      path = this.dbPath + '/kids'
    }
    this.db.database.ref(path+'/'+prod.key).update({wishProd: true})
    delete prod.key;
    this.service.setWish(prod)
    
  }

  remove(prod:any){
    this.toast.warningMessage("Item is removed from wishlist")
    let path:any;
    if(this.section == 'men'){
      path = this.dbPath + '/data'
    } else if (this.section == 'women'){
      path = this.dbPath + '/women'
    } else if(this.section == 'kids'){
      path = this.dbPath + '/kids'
    }
    this.db.database.ref(path+'/'+prod.key).update({wishProd: false})
    this.service.getWish()?.snapshotChanges().forEach((datas:any) => {
      datas.forEach((data:any) => {
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
    // console.log(productData);
    this.service.setProduct(productData);
    // localStorage.setItem('item', productData)
    this.router.navigate(['/details', productData])
  }

}
