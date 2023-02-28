import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { CategoryMenu } from '../../models/category-menu';
import { PublishMenu } from '../../models/publish-menu';
import { barcodeValidator } from '../../validations/barcode-validator';
import { PublishStartEndDataValidator } from '../../validations/publish-start-end-date-validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  newProduct: Product | undefined = undefined;
  public productForm = this.formBuilder.group(
    {
      name: ['', [Validators.required, Validators.minLength(5)]],
      price: [
        '',
        [Validators.required, Validators.min(100), Validators.max(1000)],
      ],
      stock: [
        '',
        [Validators.required, Validators.min(10), Validators.max(50)],
      ],
      category: ['', Validators.required],
      publish: ['2'],
      isPublish: [false],
      barcode: ['', [Validators.required, barcodeValidator()]],
      publishStartDate: [new Date(), [Validators.required]],
      publishEndDate: [new Date(), [Validators.required]],
    },
    { validators: PublishStartEndDataValidator() }
  );

  categoryMenuList: CategoryMenu[] = [
    { id: 1, text: 'kalemler' },
    { id: 2, text: 'Defterler' },
    { id: 3, text: 'Silgiler' },
  ];

  publishMenulist: PublishMenu[] = [
    { id: 1, text: '3 ay' },
    { id: 2, text: '6 ay' },
    { id: 3, text: '9 ay' },
  ];

  constructor(private formBuilder: FormBuilder) {}

  save() {
    this.newProduct = this.productForm.value as Product;
    console.log(this.newProduct);
  }

  isInvalid(controlName: string): boolean {
    let control = this.productForm.get(controlName)!;

    if (!(control.invalid && (control.dirty || control.touched))) return false;

    if (control.errors?.['required']) return true;
    if (control.errors?.['minlength']) return true;
    if (control.errors?.['maxlength']) return true;
    if (control.errors?.['max']) return true;
    if (control.errors?.['min']) return true;
    if (control.errors?.['barcodeFormat']) return true;

    return false;
  }

  isValid(controlName: string) {
    let control = this.productForm.get(controlName)!;
    return control.valid && (control.dirty || control.touched);
  }

  getControl(controlName: string) {
    return this.productForm.get(controlName)!;
  }

  isInvalidControl(controlName: string, validationName: string) {
    return this.getControl(controlName).errors?.[validationName];
  }
}
