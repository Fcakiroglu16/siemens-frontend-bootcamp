import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewOrderComponent } from './new-order/new-order.component';
import { Routes, RouterModule, Route, UrlSegment } from '@angular/router';

const router: Routes = [
  { path: 'new-order', component: NewOrderComponent }
]

@NgModule({
  declarations: [
    NewOrderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(router)
  ]
})
export class OrderModule { }




