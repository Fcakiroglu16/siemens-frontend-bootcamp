import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublisherComponent } from './publisher/publisher.component';
import { Subscriber1Component } from './subscriber1/subscriber1.component';
import { Subscriber2Component } from './subscriber2/subscriber2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PublisherComponent,
    Subscriber1Component,
    Subscriber2Component
  ],
  exports: [
    PublisherComponent,
    Subscriber1Component,
    Subscriber2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PagesModule { }
