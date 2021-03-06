import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
public data:any;
  constructor(private _service:DataService) { }

  addpost(title:any,url:any)
  {
if(sessionStorage.getItem("user")==null)
{
  alert("Please!! login")
  return
}
console.log(sessionStorage.getItem("user"))
    this.data={
      
       "user":sessionStorage.getItem("user"),
      "title":title,
      "url":url
    }
      this._service.addPost(this.data).subscribe(data=>{this.data=data
      if(this.data.status=="success")
    {
      alert("post added")
      location.reload()
    }
    else{
      alert("not added try again")
    }
  })
  }
  ngOnInit(): void {
  }

}
