import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishProducts:Observable<any> | undefined;
  isEmpty: any = false;
  arr : any;
  // subSubscription:Subject<any> = new Subject()

  constructor(private service: DataServiceService, private router: Router) {
  
    service.getWish()
   }

  ngOnInit(): void {
    // this.wishProducts = this.service.getWishlist()
    // console.log(this.wishProducts);
    // this.wishProducts = this.service.getWish();
    this.wishProducts = this.service.getWish()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        this.isEmpty = true;
        const key = prod.key;
        return <any>{ key, ...payload };
      }))
      // this.isEmpty = true,
    )
    console.log(this.wishProducts);
  }

  deleteItem(key:any){
    // this.service.deleteWish(key)
    console.log(key);
    this.service.deleteWish(key)
  }

  deleteAll(){
    this.service.deleteAllWish()?.then((data)=> console.log(data)).catch(err => console.log(err)
    )
  }

  details(data: any,i:any){
    // console.log(data);
    this.service.setProduct(data);
    // this.service.deleteWish(i);
    this.router.navigate(['/details']);
  }

}
