import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../services/wishlist/wishlist.service';
import { BagsService } from '../services/bags/bags.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { DatasService } from '../services/datas/datas.service';
import { ToasterService } from '../services/toaster/toaster.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  myArr = [];
  flag = false;
  size: number | undefined;
  wishlistItems: any;
  arr: any = [];
  getData: any;
  lists!: any[];
  bag!: any[];
  favBtn: boolean = false;
  ex: any;
  favIcon = false;
  lat = false;
  flag2 = false;
  delivery: any;

  constructor(
    private service: WishlistService,
    private service2: BagsService,
    private service3: DatasService,
    private config: NgbCarouselConfig,
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private toast: ToasterService
  ) {
    config.keyboard = true;
    this.route.params.subscribe((par: any) => {
      this.ex = par;
    });
  }

  ngOnInit(): void {
    this.product = Array(this.service.getProduct());
    let text = this.product[0].productId;

    let deliveryDay: Date = new Date(Date.now() + 4 * 24 * 60 * 60 * 1000);
    let da = String(deliveryDay.getDate()).padStart(2, '0');
    let mo = String(deliveryDay.getMonth() + 1).padStart(2, '0');
    let ye = deliveryDay.getFullYear();
    let del = da + '-' + mo + '-' + ye;
    this.delivery = del;

    this.service
      .getWish()
      ?.snapshotChanges()
      .subscribe((datas) => {
        datas.forEach((data) => {
          let val = data.payload.val();
          if (this.product[0].productId == val.productId) {
            this.favIcon = true;
          }
        });
      });
    this.lists = [];
    this.service
      .getWish()
      ?.snapshotChanges()
      .forEach((datas) => {
        datas.forEach((data) => {
          let d = data.payload.toJSON();
          this.lists.push(d);
        });
      });
    this.bag = [];
    this.iconChange();
    this.findBag();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }

  iconChange() {
    this.service
      .getWish()
      ?.snapshotChanges()
      .forEach((datas) => {
        datas.forEach((data) => {
          let val = data.payload.val();
          if (this.product[0].productId == val.productId) {
            this.favIcon = true;
            this.lat = true;
          }
        });
      });
  }

  findBag() {
    this.service2
      .getBag()
      ?.snapshotChanges()
      .forEach((datas) => {
        datas.forEach((data) => {
          let val = data.payload.val();
          // console.log(val);
          this.bag.push(val);
        });
      });
  }

  addToWish(data: any) {
    this.toast.successMessage('Item is added to wish list');
    this.favIcon = true;
    this.aWish(data.gender, data);
    delete data.key;

    if (this.lat == false) {
      this.service.setWish(data);
    }
  }

  aWish(val: any, obj: any) {
    let path: any;
    let key: any;
    if (val == 'Men') {
      path = '/data';
      this.service3.getMenProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);

            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: true });
          }
        });
      });
    } else if (val == 'Women') {
      path = '/women';
      this.service3.getWomenProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);
            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: true });
          }
        });
      });
    } else {
      path = '/kids';
      this.service3.getKidsProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);
            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: true });
          }
        });
      });
    }
    // this.db.database.ref(path+'/'+key).update({wishProd:true})
  }

  removeFromWish(data: any) {
    this.toast.warningMessage('Item is removed from wish list');

    let arr = data;
    let path: any;
    this.service
      .getWish()
      ?.snapshotChanges()
      .forEach((datas) => {
        datas.forEach((data) => {
          let val = data.payload.val();
          // this.rmvWish(val.gender,arr)
          if (this.product[0].productId == val.productId) {
            this.service.deleteWish(data.key);
          }
        });
      });
    this.rmvWish(data.gender, data);
    this.lat = false;
    this.favIcon = false;
  }

  rmvWish(value: any, obj: any) {
    let path: any;
    let key: any;
    if (value == 'Men') {
      path = '/data';
      this.service3.getMenProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);
            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: false });
          }
        });
      });
    } else if (value == 'Women') {
      path = '/women';
      this.service3.getWomenProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);
            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: false });
          }
        });
      });
    } else {
      path = '/kid';
      this.service3.getKidsProducts().forEach((datas) => {
        datas.forEach((data) => {
          if (data.productId == obj.productId) {
            // console.log(data.key);
            this.db.database
              .ref(path + '/' + data.key)
              .update({ wishProd: false });
          }
        });
      });
    }
    // this.db.database.ref(path+'/'+key).update({wishProd:false})
  }

  getSize(el: number, i: any, num: any) {
    this.flag = true;
    this.size = el;
    const list = document.getElementById(i);
    list?.classList.add('size--circle');
  }

  addBag(elem: any) {
    this.toast.successMessage('Item is added to Bag');
    let id = new Date().getTime().toString();
    const obj = {
      id: id,
      title: elem.brand,
      description: elem.additionalInfo,
      size: this.size,
      price: elem.price,
      image: elem.images[0].src,
      discount: elem.discountDisplayLabel,
      qty: 1,
    };

    const f = this.bag.filter(
      (data) => data.title == obj.title && data.size == obj.size
    );

    if (f.length != 1) {
      this.service2.setBag(obj);
    }
  }
}
