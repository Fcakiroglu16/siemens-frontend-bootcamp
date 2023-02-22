import { Component, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-child-product-detail',
  templateUrl: './child-product-detail.component.html',
  styleUrls: ['./child-product-detail.component.css']
})
export class ChildProductDetailComponent {
@Input() selectedProduct:Product | undefined;

}
