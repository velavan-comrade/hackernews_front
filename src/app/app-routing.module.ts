import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './component/comment/comment.component';
import { LoginComponent } from './component/login/login.component';
import { NewsComponent } from './component/news/news.component';
import { PastComponent } from './component/past/past.component';
import { PostComponent } from './component/post/post.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  {
    path:'news',
    component:NewsComponent,
  },
  {
    path:'past',
    component:PastComponent,
  },
  {
    path:'comment',
    component:CommentComponent
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:'submit',
    component:PostComponent
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
