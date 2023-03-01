import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './pages/post/post-list/post-list.component';
import { PostCreateComponent } from './pages/post/post-create/post-create.component';
import { PostUpdateComponent } from './pages/post/post-update/post-update.component';
import { HomeComponent } from './pages/common/home/home.component';
import { PagenotfoundComponent } from './pages/common/pagenotfound/pagenotfound.component';
import{HttpClientModule} from '@angular/common/http';
import { PostDetailComponent } from './pages/post/post-detail/post-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostCreateComponent,
    PostUpdateComponent,
    HomeComponent,
    PagenotfoundComponent,
    PostDetailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
