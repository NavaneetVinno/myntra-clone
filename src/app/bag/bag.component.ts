import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { reduce } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.scss']
})
export class BagComponent implements OnInit {
[x: string]: any;
  bagProducts:Observable<any> | undefined;
  isEmpty = false;
  total: Observable<Number> | undefined
  itemTotal!: Observable<Number>;

  constructor(private service: DataServiceService) { 
    service.getBag()
    
  }

  ngOnInit(): void {
    this.bagProducts = this.service.getBag()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        this.isEmpty = true;
        const key = prod.key;
        return <any>{ key, ...payload };
      }))
    )

    this.total = this.bagProducts?.pipe(
      map(order => order.reduce((total: any,item: any)=> total + item.price,0))
    )

    this.bagProducts?.subscribe(res => {
      // console.log(res.length)
      this.itemTotal = res.length;
      // console.log(this.itemTotal);
      this.service.setTotalItem(this.itemTotal)
    })

  }

  deleteItem(key:any){
    // console.log(key);
    this.service.deleteBagItem(key)
  }

  deleteAll(){
    this.service.deleteBag()?.then(data => console.log(data)).catch(err => console.error(err))
  }

}
