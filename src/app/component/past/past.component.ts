import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrls: ['./past.component.css']
})
export class PastComponent implements OnInit {
public data:any;
public ren:any;
public s=false;
  constructor(private _service:DataService) { }
  viewPD()
  {
    this.ren=this.data.data.filter(this.cday)
  }
 cday(item:any)
  {
  let time=Date.now()-item.time;
var res=Math.floor((((time/1000)/60)/60)/24)

   if(res==1)
   {
     return true
   }
   return false
  }
  viewPW()
  {
    this.ren=this.data.data.filter(this.cweek)
  }
 cweek(item:any)
  {
  let time=Date.now()-item.time;
var res=Math.floor(((((time/1000)/60)/60)/24)/7)

   if(res==1)
   {
     return true
   }
   return false
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
    this._service.unvote(dec).subscribe(data=>{console.log(data); this._service.getpost().subscribe(data => {this.data=data;}, error => console.log(error))},err=>{console.log(err)})
  }
  public subs(str:any)
  {
    var str1=str.split(".",3);
   
    return str1[1]+"."+str1[2];
  }
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
       this._service.getpost().subscribe(data => {this.data=data;}, error => console.log(error));this.data=res},(err)=>console.log(err))
   
  }
  ngOnInit(): void {
   this._service.getpost().subscribe(res=>{
     console.log(res)
     this.data=res;
    //  this.viewPD(res);
   })
   
  }

}
