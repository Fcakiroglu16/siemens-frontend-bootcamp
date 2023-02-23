import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-child-product',
  templateUrl: './child-product.component.html',
  styleUrls: ['./child-product.component.css']
})
export class ChildProductComponent {
  @Input() selectedId:number  | undefined;
  @Input() productList: 

  ReadonlyArray<Product> | undefined;
  @Output() detailShowClick = new EventEmitter<number>();


  showDetail(id: number) {
    this.selectedId=id;
    this.detailShowClick.emit(this.selectedId);
  }
  highlightRow(productId:number)
  {
    return this.selectedId==productId;
  }
}
