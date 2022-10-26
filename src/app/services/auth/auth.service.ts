import { Injectable } from '@angular/core';
import { User } from 'firebase/auth'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Route, Router } from '@angular/router';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  userData: Observable<any>;
  dbPath = '/user';
  listArr: AngularFireList<any> | undefined;
  currentUser:any;

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase, private route:Router) {
    this.userData = angularFireAuth.authState;
    this.listArr = db.list(this.dbPath)
    this.currentUser = angularFireAuth.authState.pipe(
      map( user => {
        if (user) {
          return this.db.list<any>(`user/${user.uid}`).valueChanges();
        } else {
          return null
        }
      })
    )
    
  }

  /* Sign up */
  SignUp(data:any) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        this.listArr?.push(data)
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });    
  }

  /* Sign in */
  SignIn(data:any) {
    this.angularFireAuth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log('You are Successfully logged in!');
        this.route.navigate(['/home'])
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut();
  } 

}