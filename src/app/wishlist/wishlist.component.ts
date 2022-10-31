import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { DatasService } from '../services/datas/datas.service';
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
  products:Observable<any> | undefined;
  boxes: any;
  total:any;
  loader:boolean = false;
  newWish:any;
  dbPath:any;

  constructor(private service: WishlistService, private router: Router, private toast: ToasterService, private auth: AuthService, private db: AngularFireDatabase, private srvc:DatasService) {}

  ngOnInit(): void {
    // this.service.ngOnInit()
    // this.service.newGetWish()
    this.wishProducts = this.service.getWish()?.snapshotChanges().pipe(
      map((products: any[]) => products.map(prod => {
        const payload = prod.payload.val();
        // console.log(payload);
        this.isEmpty = true;
        const key = prod.payload.key;
        return <any>{ key, ...payload };
      }))
    )
    // console.log(this.newWish);
    // this.service.getDatas()
    this.service.getWish()?.valueChanges().subscribe((datas:any) => {
      // this.products = datas
      this.isEmpty = true;
      datas.forEach((data:any) => {
        // console.log(data);
      })
      this.loader = true;
      // this._changeDetectionRef.detectChanges();
    })
    this.dbPath = this.srvc.path
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
