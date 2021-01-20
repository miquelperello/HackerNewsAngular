import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NewsComponent } from './news/news.component';
import { SubmitComponent } from './submit/submit.component'
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SubmittedComponent } from './submitted/submitted.component';
import { Info_userComponent } from "./info_user/info_user.component";
import {FormsModule} from "@angular/forms";
import { ThreadsComponent } from './threads/threads.component';
import { UpvotedComponent } from './upvoted/upvoted.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { DateAgoPipe } from './pipes/date-ago.pipe';
import { UpvotedcommentsComponent } from './upvotedcomments/upvotedcomments.component';
import { IndexComponent } from './index/index.component';
import { InfoMessageComponent } from './info-message/info-message.component';
import { ReplyComponent } from './reply/reply.component';
import { CommentsComponent } from './comments/comments.component';


const routes: Routes = [
  { path: 'userinfo', component: UserInfoComponent },
  { path: 'news', component: NewsComponent },
  { path: 'submit', component: SubmitComponent},
  { path: 'submitted', component: SubmittedComponent},
  { path: 'upvoted', component: UpvotedComponent},
  { path: 'upvotedcomments', component: UpvotedcommentsComponent},
  { path: 'info_user/:id', component: Info_userComponent},
  { path: 'threads', component: ThreadsComponent},
  { path: 'index', component: IndexComponent},
  { path: 'info_message', component: InfoMessageComponent},
  { path: 'reply', component: ReplyComponent},
  { path: 'comments', component: CommentsComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserInfoComponent,
    NewsComponent,
    HeaderComponent,
    FooterComponent,
    SubmitComponent,
    SubmittedComponent,
    Info_userComponent,
    ThreadsComponent,
    UpvotedComponent,
    FavoritesComponent,
    DateAgoPipe,
    UpvotedcommentsComponent,
    DateAgoPipe,
    IndexComponent,
    InfoMessageComponent,
    ReplyComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
