import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  constructor(private productState: ProductStateService) { }
  ngOnInit(): void {
    this.productList = this.productState.productList;
  }
}
