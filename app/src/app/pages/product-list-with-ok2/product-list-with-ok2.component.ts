import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-list-with-ok2',
  templateUrl: './product-list-with-ok2.component.html',
  styleUrls: ['./product-list-with-ok2.component.css']
})
export class ProductListWithOk2Component implements OnInit, OnDestroy {

  productList: Product[] = [];
  productListSubscription: Subscription | undefined;
  constructor(private productState: ProductStateService) {

  }
  ngOnDestroy(): void {
    this.productListSubscription?.unsubscribe();
  }
  ngOnInit(): void {
    this.productListSubscription = this.productState.productListObservable.subscribe(x => {
      console.table(x);
      this.productList = x.filter(x => x.isOk == true);
    })
  }


}
