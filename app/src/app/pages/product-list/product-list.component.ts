import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductStateService } from '../../states/product-state.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[] = [];
  @Output() isOkClickEvent = new EventEmitter();

  constructor(private productState: ProductStateService) { }
  ngOnInit(): void {
    this.productList = this.productState.productList;
  }

  isOk(id: number) {

    this.productState.isOk(id);

    this.isOkClickEvent.emit();


  }
}
