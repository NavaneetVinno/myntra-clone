import { EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { User } from 'firebase/auth'
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, map, Observable, Subject, switchMap, of, first } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements OnInit {
  people:any = null;
  // private peopleDetails: User | null | undefined;
  userData: Observable<any>;
  dbPath = '/user';
  listArr: AngularFireList<any> | undefined;
  currentUser:any;
  userCurrMail:any;
  userId:any;
  user:any
  idUser: Observable<any> | undefined
  public userMail:any;
  @Output() userUid = new EventEmitter<any>()
  

  constructor(private angularFireAuth: AngularFireAuth, private db: AngularFireDatabase, private route:Router) {
    this.userData = angularFireAuth.authState;
    
    this.listArr = db.list(this.dbPath)
    this.currentUser = angularFireAuth.authState.pipe(
      map( user => {
        this.userId = user?.uid
        if (user) {
          return this.db.list<any>(`user/${user.uid}`).valueChanges();
        } else {
          return null
        }
      })
    )

    angularFireAuth.authState.subscribe(data => {
      this.userCurrMail = data?.uid
      this.userUid.emit(data?.uid)
      this.people = data
      // console.log(this.people);
    })
    // this.currentUser.subscribe((data: any) => {
      //   console.log(data);
      // })
      // console.log(this.userId);
    }

    get isAuthenticated(): boolean {
      return this.people !== null;
  }

  get currentUserId(): string {
    return this.isAuthenticated ? this.people.uid : null;
  }
    
    


  ngOnInit(): void {
    this.angularFireAuth.authState.subscribe(data => {
      this.userCurrMail = data?.uid
    })
  }

 
  
  getUser(){
    return this.userCurrMail
  }

  /* Sign up */
  SignUp(data:any) {
    this.angularFireAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(res => {
        console.log('You are Successfully signed up!', res);
        alert("Your account is created")
        const key = res.user?.uid
        // this.listArr?.push({key, ...data})
        this.db.object(`user/${key}`).set(data)
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