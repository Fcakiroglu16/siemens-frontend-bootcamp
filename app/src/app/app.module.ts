import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCreateComponent } from './pages/product-create/product-create.component';
import { ProductUpdateComponent } from './pages/product-update/product-update.component';
import { ProductDeleteComponent } from './pages/product-delete/product-delete.component';
import { ProductListWithOkComponent } from './pages/product-list-with-ok/product-list-with-ok.component';
import { ProductListWithOk2Component } from './pages/product-list-with-ok2/product-list-with-ok2.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    ProductListWithOkComponent,
    ProductListWithOk2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
