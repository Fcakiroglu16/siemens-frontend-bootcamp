import { Component } from '@angular/core';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent {

  constructor(private productState: ProductStateService) {


  }

  update(): void {

    let productIndexToUpdate = this.productState.productList.findIndex(x => x.id == 2);

    this.productState.productList[productIndexToUpdate].name = "kalem 200";

    this.productState.productList[productIndexToUpdate].price = 200;
  }

}
