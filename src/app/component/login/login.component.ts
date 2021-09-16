import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 hide=true;
  title = 'firebase-angular-auth';
  isSignedIn = false
  
  constructor(public Firebase:FirebaseService){

  }
  ngOnInit(): void {
    if(sessionStorage.getItem('user')!==null)
    this.isSignedIn= true
    else
    this.isSignedIn=false
  }
  async onSignup(email:string,password:string){
    await this.Firebase.signup(email,password)
    if(this.Firebase.isLoggedIn)
    this.isSignedIn =false
    location.reload()
    alert("You are registered pls Sign IN")
  }
  async onSignin(email:string,password:string){
    await this.Firebase.signin(email,password)
    if(this.Firebase.isLoggedIn)
    {
    this.isSignedIn =true
    location.reload()
    }
  }

  handleLogout(){
    this.isSignedIn=false
  }
  logout(){
    this.Firebase.logout()
    location.reload()
  }
}


