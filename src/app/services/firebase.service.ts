import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false
  constructor(public firebaseAuth: AngularFireAuth) { }
  async signin(email: string, password:string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn= true
      sessionStorage.setItem('user',JSON.stringify(res.user?.email))
    }).
    catch(err=>{
      console.log(err);
      alert(err)
    })
  }

  async signup(email: string, password:string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      alert("sigup success please login!!")
    }).catch(err=>{
      alert(err)
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    sessionStorage.removeItem('user')
  }
}
