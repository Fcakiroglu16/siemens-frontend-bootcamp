import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
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

  isInvalid(model: FormControl): boolean {
    if (!(model.invalid && (model.dirty || model.touched))) return false;

    if (model.errors?.['required']) return true;
    if (model.errors?.['minlength']) return true;
    if (model.errors?.['maxlength']) return true;

    return false;
  }

  isValid(model: FormControl) {
    return model.valid && (model.dirty || model.touched);
  }
}
