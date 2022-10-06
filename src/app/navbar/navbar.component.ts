import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

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
  constructor(private service: DataServiceService,private router:Router) {
    service.getTotalItem()
   }

  ngOnInit(): void {
    this.service.getBag()?.valueChanges().subscribe(data =>{
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
}
