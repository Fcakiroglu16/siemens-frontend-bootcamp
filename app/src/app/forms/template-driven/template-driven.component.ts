import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../../models/product';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  newProduct?: Product = undefined; // { name: '', stock: 0, price: 0, category: '',id:0 };

  saveProduct(productForm: NgForm) {
    this.newProduct = productForm.value as Product;
    console.log(this.newProduct);
  }
}
