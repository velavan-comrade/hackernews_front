import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getpost()
  {
    let url="http://localhost:9000/post"
   return this.http.get(url)
  }
  getComment(id:any)
  {
    let url=`http://localhost:9000/comment/${id}`
    return this.http.get(url)
  }
  getCpost(id:any)
  {
    let url=`http://localhost:9000/post/${id}`
    return this.http.get(url)
  }
  addPost(data:any)
  {
    let url=`http://localhost:9000/post`
    return this.http.post(url,data)
  }
  addComment(data:any)
  {
    let url=`http://localhost:9000/comment`
    return this.http.post(url,data)
  }
  login(data:any)
  {
    let url=`http://localhost:9000/user`
    return this.http.post(url,data)
  }
}
