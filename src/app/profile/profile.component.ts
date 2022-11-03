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
import { OrdersService } from '../services/orders/orders.service';
import { ToasterService } from '../services/toaster/toaster.service';
import countryCode from "../phone-codes.json"

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
  userCountry:any;
  userEmail:any;
  firstUser:any;
  datas:any
  country:any;

  constructor(
    private service: OrdersService,
     private userService:AuthService, 
     private afDatabase:AngularFireDatabase, 
     private af:AngularFireAuth, 
     private router:Router, 
     private service2:DatasService,
     private toast: ToasterService,
     private storage: AngularFireStorage
     ) {
    service.getOrders()?.valueChanges().subscribe((data:any) => {
      this.loader = true;
    })
   }

  ngOnInit(): void {
    this.country = countryCode
    this.ordersProduct = this.service.getOrders()?.snapshotChanges().pipe(
      map((products:any []) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )
    this.af.authState.subscribe(data => {
      this.userData = data
      this.userMail = data?.email
      this.findUser(data?.email)
      this.loader = true;
    })
    this.service.getOrders()?.valueChanges().subscribe((data:any) => {
      this.orderLength = data
      this.loader = true;
    })
    this.dbPath = this.service2.path
    
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      location : new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    })

    this.afDatabase.list(this.dbPath).valueChanges().subscribe(datas => {
      console.log(datas);
      this.userName = datas[10]
      this.userPhone = datas[8]
      this.userGender = datas[4]
      this.userDOB = datas[2]
      this.userLocation = datas[6]
      this.userCountry = datas[0]

      this.userForm.patchValue({
        username : this.userName,
        phone : this.userPhone,
        gender: this.userGender,
        dob : this.userDOB,
        location: this.userLocation,
        country: this.userCountry
      })
    })
  }

  onPhotoSelect(e:any, user:any){
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
          this.toast.successMessage("Photo is uploaded successfully")
        })
      })
    ).subscribe(url => {
      if (url) {
      }
    })
    
    this.userPhoto = fileRef
  }

  editUser(data:any){
    this.afDatabase.object(this.dbPath).update({
      username : data.username,
      phone : data.phone,
      gender : data.gender,
      dob : data.dob,
      location : data.location,
      country: data.country,
    })
    this.toast.successMessage("User successfully updated")
  }

  findUser(email:any){
    this.userService.listArr?.snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        const pay = data.payload.val().email
        if(pay == email){
          this.currentUser = data.payload.val()
          this.userName = data.payload.val().username;
          this.userGender = data.payload.val().gender;
          this.userPhone = data.payload.val().phone;
          this.userDOB = data.payload.val().dob;
          this.userLocation = data.payload.val().location;
          this.userEmail = data.payload.val().email;
          this.userCountry = data.payload.val().country;

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
