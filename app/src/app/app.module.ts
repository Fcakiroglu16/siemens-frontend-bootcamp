import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './directieves/highlight.directive';
import { CounterDirective } from './directieves/counter.directive';





@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CounterDirective,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
