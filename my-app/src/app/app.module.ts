import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './input-output/parent/parent.component';
import { Child1Component } from './input-output/child1/child1.component';
import { ParentProductComponent } from './input-output-product/components/parent-product/parent-product.component';
import { ChildProductComponent } from './input-output-product/components/child-product/child-product.component';
import { ChildProductDetailComponent } from './input-output-product/components/child-product-detail/child-product-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    ParentProductComponent,
    ChildProductComponent,
    ChildProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
