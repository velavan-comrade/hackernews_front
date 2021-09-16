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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire/compat'
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import{MatIconModule}from '@angular/material/icon';
import { MatStepperModule} from '@angular/material/stepper';
import{ MatTabsModule} from '@angular/material/tabs';

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
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCFcLMhVUT4ItQbmx4gLoW2lc_imTwHO7s",
      authDomain: "hackernews-1df52.firebaseapp.com",
      projectId: "hackernews-1df52",
      storageBucket: "hackernews-1df52.appspot.com",
      messagingSenderId: "682577812302",
      appId: "1:682577812302:web:4ac7374ad46c5b8c0c5c1f",
      measurementId: "G-BFR4HELG22"
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
