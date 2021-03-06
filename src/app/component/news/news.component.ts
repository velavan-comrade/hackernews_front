import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'bson';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public count=0;
  public s=false;
  public data1:any;

  constructor(private _service:DataService) { }
  public upvote(id:any,score:any)
  {
    console.log(id)
    if(sessionStorage.getItem("user")==null)
    {
      alert("Please!! login")
      return 
    }
    this.s=true
    let vote={
      "user":sessionStorage.getItem("user"),
      "id":id,
      "score":score+1
    }
    console.log(id);
    this._service.advote(vote).subscribe((res)=>{console.log(res);
       this._service.getpost().subscribe(data => {this.data1=data;}, error => console.log(error));this.data1=res},(err)=>console.log(err))
   
  }
  check(vote:any)
  {
   
    let user =sessionStorage.getItem("user")
    if(user !=null)
    {
      console.log("in IF")
        return vote.includes(user)
    }
   
    return false

  }
  public subs(str:any)
  {
    var str1=str.split(".",3);
   
    return str1[1]+"."+str1[2];
  }
  public caltime(ctime:any)
  {
   return this._service.caltime(ctime) ;
  }
  unvote(id:any,score:any)
  {
    let dec={
      "id":id,
      "user":sessionStorage.getItem("user"),
      "score":score-1
    }
    this._service.unvote(dec).subscribe(data=>{console.log(data); this._service.getpost().subscribe(data => {this.data1=data;}, error => console.log(error))},err=>{console.log(err)})
  }

  ngOnInit(): void {
    this._service.getpost().subscribe(data => {this.data1=data;}, error => console.log(error))
    
  }

}
