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
public data=[{
  
    "by" : "dhouston",
    "descendants" : 71,
    "id" : 8863,
    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    "score" : 111,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
  },
  {
  
    "by" : "dhouston",
    "descendants" : 71,
    "id" : 8863,
    "kids" : [ 8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067, 8908, 9055, 8865, 8881, 8872, 8873, 8955, 10403, 8903, 8928, 9125, 8998, 8901, 8902, 8907, 8894, 8878, 8870, 8980, 8934, 8876 ],
    "score" : 111,
    "time" : 1175714200,
    "title" : "My YC app: Dropbox - Throw away your USB drive",
    "type" : "story",
    "url" : "http://www.getdropbox.com/u/2/screencast.html"
  }
];
  constructor(private _service:DataService) { }
  public upvote()
  {
    this.s=true
    for (const x of this.data) {
      x.score+=1;
      // update user 
    }
  }
  public subs(str:any)
  {
    var str1=str.split(".",3);
    console.log(str1);
    return str1[1]+"."+str1[2];
  }
  public caltime(ctime:any)
  {
    var current=Date.now();
    
    return new Timestamp(ctime+current) ;
  }
  adhide(/*passid*/)
  {
    //add this id to user data to skip
    console.log("in1")
  }

  ngOnInit(): void {
    this._service.getpost().subscribe(data => {this.data1=data;console.log(data)}, error => console.log(error))
    
  }

}
