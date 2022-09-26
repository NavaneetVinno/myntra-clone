import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  text: any;
  bagProducts:Observable<any> | undefined;
  constructor(private service: DataServiceService) {
    service.getTotalItem()
   }

  ngOnInit(): void {
    this.bagProducts = this.service.getBag()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{ key, ...payload };
      }))
    )
  }
}
