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

    this.data={
       //"user":sessionStorage.getItem("user"),
      "title":title,
      "url":url
    }
      this._service.addPost(this.data).subscribe(data=>console.log(data))
  }
  ngOnInit(): void {
  }

}
