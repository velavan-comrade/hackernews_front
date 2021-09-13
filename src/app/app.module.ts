import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { PastComponent } from './component/past/past.component';
import { RouterComponent } from './component/router/router.component';
import { FromComponent } from './component/from/from.component';
import { CommentComponent } from './component/comment/comment.component';
import { UserComponent } from './component/user/user.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostComponent } from './component/post/post.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    PastComponent,
    RouterComponent,
    FromComponent,
    CommentComponent,
    UserComponent,
    PostComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
