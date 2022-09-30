import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ordersProduct:Observable<any> | undefined
  // n = 0;
  flag = false;
  constructor(private service: DataServiceService) {
    
   }

  ngOnInit(): void {
    this.ordersProduct = this.service.getOrders()?.snapshotChanges().pipe(
      map((products:any []) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )
  }

  gotoDiv(n:number){
    if(n == 1){
      this.flag = true;
    } else {
      this.flag = false;
    }
  }

  removeItem(key:any){
    this.service.deleteOrder(key);
    // console.log(key);
  }

  modalView(datas:any,data:any){
    console.log(datas);
    console.log(data);
  }
}
