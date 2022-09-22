import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  wishProducts:any;
  subSubscription:Subject<any> = new Subject()

  constructor(private service: DataServiceService) {
    service.getWishlist().subscribe((res: any) => console.log(res));
    
   }

  ngOnInit(): void {
    this.wishProducts = this.service.getWishlist()
    console.log(this.wishProducts);
  }

}
