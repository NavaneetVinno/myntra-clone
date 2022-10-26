import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ToasterService } from '../services/toaster/toaster.service';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
[x: string]: any;
  wishProducts:Observable<any> | undefined;
  isEmpty: any = false;
  arr : any;
  products:any = []
  boxes: any;
  total:any;
  loader:boolean = false;

  constructor(private service: WishlistService, private router: Router, private toast: ToasterService) {}

  ngOnInit(): void {
    this.wishProducts = this.service.getWish()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        this.isEmpty = true;
        const key = prod.payload.key;
        return <any>{ key, ...payload };
      }))
    )
   
    console.log(this.wishProducts);
    // this.service.getDatas()
    this.service.getWish()?.valueChanges().subscribe(data => {
      this.loader = true;
    })
  }

  deleteItem(key:any){
    this.toast.errorMessage("Item is removed from the list")
    this.service.deleteWish(key)
    console.log(key);
  }

  deleteAll(){
    this.toast.errorMessage("Your list is empty")
    this.service.deleteAllWish()?.then((data)=> console.log(data)).catch(err => console.log(err)
    )
  }

  details(data: any,i:any){
    this.service.setProduct(data);
    this.router.navigate(['/details']);
  }

}
