import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { BagsService } from '../services/bags/bags.service';
import { WishlistService } from '../services/wishlist/wishlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  text: any;
  bagProducts!: Observable<any>;
  data:any;
  wish:any;
  constructor(private service: WishlistService,private router:Router, private service2:BagsService, private service3: AuthService) {
    // service.getTotalItem()
   }

  ngOnInit(): void {
    this.service2.getBag()?.valueChanges().subscribe(data =>{
      this.data = data
    })
    this.service.getWish()?.valueChanges().subscribe(data => {
      this.wish = data;
    })
  }
  getoHome(){
    // console.log("get");
    this.router.navigate(['/'])
  }

  logout(){
    this.service3.SignOut()
    this.router.navigate(['/'])
  }
}
