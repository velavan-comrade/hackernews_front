import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';


@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  user:any;
  constructor(public Firebase:FirebaseService) {  }
  check(){
    if(sessionStorage.getItem('user')==null){
      return true;
    }else{
      return false;
    }
  }
  logout(){
    this.Firebase.logout()
    sessionStorage.clear()
    location.reload()
  }

  ngOnInit(): void {
    this.user=sessionStorage.getItem("user")
  }
}
