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
import { CardsService } from '../services/cards/cards.service';
import { AddressesService } from '../services/addresses/addresses.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  ordersProduct:Observable<any> | undefined
  userData:any
  flag = false;
  text:any = 'zero'
  full:any;
  loader:boolean = false;
  userMail:any;
  currentUser:any
  orderLength:any;
  userForm!: FormGroup;
  cardForm!: FormGroup;
  editCardForm!: FormGroup;
  cardPath:any;
  cardName:any;
  cardNum:any;
  cardExp:any;
  cardCvv:any;
  cardKey:any;
  addressForm!: FormGroup;
  editAddressForm!: FormGroup;
  addressPath:any;
  addressName:any;
  addressPhone:any;
  addressAdd:any;
  addressPin:any;
  addressKey:any;
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
  cardsProduct: Observable<any> | undefined;
  addressProduct: Observable<any> | undefined;
  cardsLength:any;
  addressLength:any;

  constructor(
    private service: OrdersService,
     private userService:AuthService, 
     private afDatabase:AngularFireDatabase, 
     private af:AngularFireAuth, 
     private router:Router, 
     private service2:DatasService,
     private toast: ToasterService,
     private storage: AngularFireStorage,
     private cardService: CardsService,
     private addressService:AddressesService,
     ) {
    // service.getOrders()?.valueChanges().subscribe((data:any) => {
    //   this.loader = true;
    // })
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

    this.cardsProduct = this.cardService.getCards()?.snapshotChanges().pipe(
      map((products:any[]) => products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )

    this.addressProduct = this.addressService.getAddress()?.snapshotChanges().pipe(
      map((products:any[])=> products.map(prod => {
        const payload = prod.payload.val();
        const key = prod.key;
        return <any>{key, ...payload}
      }))
    )

    this.af.authState.subscribe(data => {
      this.userData = data
      this.userMail = data?.email
      this.findUser(data?.email)
    })
    this.service.getOrders()?.valueChanges().subscribe((data:any) => {
      this.orderLength = data
      // this.loader = true;
    })
    this.cardService.getCards()?.valueChanges().subscribe(data => {
      this.cardsLength = data
    })
    this.addressService.getAddress()?.valueChanges().subscribe(data => {
      this.addressLength = data
    })
    this.dbPath = this.service2.path
    this.cardPath = this.cardService.path
    this.addressPath = this.addressService.path
    
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      phone: new FormControl('',[Validators.pattern("^((\\+91-?) |0)?[0-9]{10}$"), Validators.minLength(10), Validators.maxLength(10), Validators.required]),
      gender: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      location : new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
    })

    this.cardKey = localStorage.getItem('card-key')
    this.cardForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("[0-9]{12}$")]),
      expiry: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("[0-9]{3}$")]),
    })

    this.editCardForm = new FormGroup({
      name: new FormControl('', Validators.required),
      number: new FormControl('', [Validators.required, Validators.minLength(12), Validators.maxLength(12), Validators.pattern("[0-9]{12}$")]),
      expiry: new FormControl('', Validators.required),
      cvv: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(3), Validators.pattern("[0-9]{3}$")])
    })
    this.addressKey = localStorage.getItem('address-key')
    this.addressForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{10}$")]),
      address: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]{6}$")]),
    })

    this.editAddressForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]{10}$")]),
      address: new FormControl('', Validators.required),
      pin: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(6), Validators.pattern("[0-9]{6}$")]),
    })

    this.afDatabase.list(this.dbPath).snapshotChanges().subscribe(datas => {
      datas.forEach((data) => {
        if(data.key == 'username'){
          this.userName = data.payload.val();
        } else if(data.key == 'phone'){
          this.userPhone = data.payload.val();
        } else if(data.key == 'gender'){
          this.userGender = data.payload.val();
        } else if(data.key == 'dob'){
          this.userDOB = data.payload.val();
        } else if(data.key == 'location'){
          this.userLocation = data.payload.val();
        } else if(data.key == 'country'){
          this.userCountry = data.payload.val();
        }
      })

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
// ADDRESS SERVICE
  createAddress(data:any){
    this.addressService.setAddress(data);
    this.toast.successMessage("New address created")
  }

  editOneAddress(key:any){
    localStorage.setItem('address-key', key);
    this.afDatabase.list(this.addressPath + '/' + key).snapshotChanges().subscribe(datas => {
      datas.forEach(data => {
        if(data.key == 'name'){
          this.addressName = data.payload.val()
        } else if(data.key == 'phone'){
          this.addressPhone = data.payload.val()
        } else if(data.key == 'address'){
          this.addressAdd = data.payload.val()
        } else if(data.key == 'pin'){
          this.addressPin = data.payload.val()
        }
      })
      this.editAddressForm.patchValue({
        name: this.addressName,
        phone: this.addressPhone,
        address: this.addressAdd,
        pin: this.addressPin
      })
    })
  }

  editAddress(data:any){
    this.afDatabase.object(this.addressPath + "/" + this.addressKey).update({
      name: data.name,
      phone: data.phone,
      address: data.address,
      pin: data.pin,
    })
    this.toast.successMessage("Address updated successfully")
  }

  deleteAddress(key:any){
    this.addressService.deleteAddressItem(key)
    this.toast.warningMessage("Address item is deleted")
  }

  // CARD SERVICE

  createCard(datas:any){
    // console.log(datas);
    this.cardService.setCard(datas)
    this.toast.successMessage("New card created")
  }

  editOneCard(key:any){
    // console.log(key);
    localStorage.setItem('card-key',key)
    this.afDatabase.list(this.cardPath + '/' + key).snapshotChanges().subscribe(datas => {
      // console.log(datas);
      datas.forEach(data => {
        if(data.key == 'name'){
          this.cardName = data.payload.val();
        } else if(data.key == 'number'){
          this.cardNum = data.payload.val()
        } else if(data.key == 'expiry'){
          this.cardExp = data.payload.val()
        } else if(data.key == 'cvv'){
          this.cardCvv = data.payload.val()
        }
      })
      this.editCardForm.patchValue({
        name: this.cardName,
        number: this.cardNum,
        expiry: this.cardExp,
        cvv: this.cardCvv,
      })
    })
  }

  editCard(datas:any){
    this.afDatabase.object(this.cardPath + "/" + this.cardKey).update({
      name: datas.name,
      number: datas.number,
      expiry: datas.expiry,
      cvv: datas.cvv,
    })
    this.toast.successMessage("Your card updated successfully")
  }

  deleteCard(key:any){
    this.cardService.deleteCard(key)
    this.toast.warningMessage("card is deleted")
  }

  // USER SERVICE

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
      this.loader = true;
    })
  }

  gotoDiv(n:number){
    // if(n == 1){
    //   this.flag = true;
    // } else {
    //   this.flag = false;
    // }
    if(n == 0){
      this.text = 'zero'
    } else if(n == 1){
      this.text = 'one'
    } else if(n == 2){
      this.text = 'two'
    } else if(n == 3){
      this.text = 'three'
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
