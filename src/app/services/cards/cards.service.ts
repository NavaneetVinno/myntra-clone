import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  cardPath = '/cards';
  cardsArr: AngularFireList<any> | undefined;
  path: any;

  constructor(private db:AngularFireDatabase, private service:AuthService) { 
    let uid = service.getUser()
    let id = uid?.slice(1,-1)
    this.path = 'user/' + id + this.cardPath
    this.cardsArr = db.list('user/' + id + this.cardPath)
  }

  getCards(){
    return this.cardsArr;
  }

  setCard(data:any){
    return this.cardsArr?.push(data)
  }

  deleteCard(key:any){
    return this.cardsArr?.remove(key)
  }

  deleteAll(){
    return this.cardsArr?.remove()
  }
}
