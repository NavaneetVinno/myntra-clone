import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireStorage } from '@angular/fire/compat/storage'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import * as firebase from 'firebase/compat';
import { finalize, map, Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { DatasService } from '../services/datas/datas.service';
// import { ImageService } from '../services/image/image.service';
import { OrdersService } from '../services/orders/orders.service';
import { ToasterService } from '../services/toaster/toaster.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ordersProduct:Observable<any> | undefined
  userData:any
  flag = false;
  full:any;
  loader:boolean = false;
  userMail:any;
  currentUser:any
  orderLength:any;
  userForm!: FormGroup;
  dbPath:any;
  fb:any;
  downloadURL!: Observable<string>
  userPhoto: any;
  userName:any;
  userPhone:any;
  userGender:any;
  userDOB:any;
  userLocation:any;
  userEmail:any;
  firstUser:any;
  datas:any

  constructor(
    private service: OrdersService,
     private userService:AuthService, 
     private afDatabase:AngularFireDatabase, 
     private af:AngularFireAuth, 
     private router:Router, 
     private service2:DatasService,
     private toast: ToasterService,
    //  private imgService: ImageService,
     private storage: AngularFireStorage
     ) {
    // service.getOrders()?.valueChanges().subscribe((data:any) => {
    //   this.loader = true;
    // })
    // this.userForm = new FormGroup({
    //   username: new FormControl(this.userName),
    //   phone: new FormControl(this.userPhone),
    //   gender: new FormControl(this.userGender),
    //   dob: new FormControl(this.userDOB),
    //   location : new FormControl(this.userLocation)
    // })
   }

  ngOnInit(): void {
    this.ordersProduct = this.service.getOrders()?.snapshotChanges().pipe(
      map((products:any []) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )
    this.af.authState.subscribe(data => {
      // console.log(data?.email);
      this.userData = data
      // console.log(data);
      this.userMail = data?.email
      this.findUser(data?.email)
      this.loader = true;
    })
    // this.loader = false
    this.service.getOrders()?.valueChanges().subscribe((data:any) => {
      this.orderLength = data
      this.loader = true;
    })
    // this.loader = false
    this.dbPath = this.service2.path
    // let arr:any = []
    
    
    // this.userForm = new FormGroup({
    //   username: new FormControl(this.datas[9]),
    //   phone: new FormControl(this.datas[7]),
    //   gender: new FormControl(this.datas[3]),
    //   dob: new FormControl(this.datas[1]),
    //   location : new FormControl(this.datas[5])
    // })
    this.userForm = new FormGroup({
      username: new FormControl(),
      phone: new FormControl(),
      gender: new FormControl(),
      dob: new FormControl(),
      location : new FormControl()
    })
    this.afDatabase.list(this.dbPath).valueChanges().subscribe(datas => {
      // arr.push(datas)
      // console.log(datas[1]);
      this.userName = datas[9]
      // console.log(datas[3]);
      this.userPhone = datas[7]
      // console.log(datas[5]);
      this.userGender = datas[3]
      // console.log(datas[7]);
      this.userDOB = datas[1]
      // console.log(datas[9]);
      this.userLocation = datas[5]
      // this.firstUser = datas
      // console.log(datas);
      // this.datas = datas
      this.userForm.patchValue({
        username : this.userName,
        phone : this.userPhone,
        gender: this.userGender,
        dob : this.userDOB,
        location: this.userLocation
      })
    })
    // console.log(arr);
    
  }

  onPhotoSelect(e:any, user:any){
    // console.log(e.target.files[0]);
    const file = e.target.files[0];
    const filePath = this.dbPath + '/photoURL';
    const fileRef = this.storage.ref(filePath)
    const task = this.storage.upload(filePath, file)
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if(url){
            this.fb = url
          }
          this.afDatabase.object(this.dbPath).update({
            photoURL: this.fb,
          })
          // console.log(this.fb);
          this.toast.successMessage("Photo is uploaded successfully")
        })
      })
    ).subscribe(url => {
      if (url) {
        // console.log(url);
      }
    })
    // console.log(user);
    
    this.userPhoto = fileRef
  }

  editUser(data:any){
    // console.log(data.username);
    // this.userService.updateUser(data)
    this.afDatabase.object(this.dbPath).update({
      username : data.username,
      phone : data.phone,
      gender : data.gender,
      dob : data.dob,
      location : data.location,
    })
    this.toast.successMessage("User successfully updated")
  }

  findUser(email:any){
    this.userService.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        // console.log(data.payload.val());
        // console.log(data.payload.val().email);
        const pay = data.payload.val().email
        if(pay == email){
          this.currentUser = data.payload.val()
          this.userName = data.payload.val().username;
          this.userGender = data.payload.val().gender;
          this.userPhone = data.payload.val().phone;
          this.userDOB = data.payload.val().dob;
          this.userLocation = data.payload.val().location;
          this.userEmail = data.payload.val().email
          // console.log(true);
          this.firstUser = {
            username: this.userName,
            phone: this.userPhone,
            gender: this.userGender,
            dob: this.userDOB,
            location: this.userLocation
          }
        }
      })
    })
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
  }

  modalView(datas:any,data:any){
    
    const details = {
      "delivery": datas.delivery,
      "placed": datas.time,
      "person": datas.address.userName,
      "address": datas.address.address,
      "phone": datas.address.phone,
      "title": data.title,
      "description": data.description,
      "price": data.price,
      "size": data.size,
      "qty": data.qty,
      "discount": data.discount,
      "image": data.image,
    }
    this.full = details
  }

  logout(){
    this.userService.SignOut()
    this.router.navigate(['/'])
  }
}
