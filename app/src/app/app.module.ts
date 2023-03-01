import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { HomeComponent } from './pages/home/home.component';
import { NgContainerAndTemplateComponent } from './pages/ng-container-and-template/ng-container-and-template.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomeComponent, NgContainerAndTemplateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule, // eager loading
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
