import { Component } from '@angular/core';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  productId = 0;
  constructor(private productState: ProductStateService) {

  }

  add(): void {
    this.productId++;
    this.productState.productList.push({ id: this.productId, name: "kalem 1", price: 200, isOk:false })
  }
}
