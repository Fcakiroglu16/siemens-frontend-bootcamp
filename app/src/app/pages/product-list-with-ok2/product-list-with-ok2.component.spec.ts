import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWithOk2Component } from './product-list-with-ok2.component';

describe('ProductListWithOk2Component', () => {
  let component: ProductListWithOk2Component;
  let fixture: ComponentFixture<ProductListWithOk2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListWithOk2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListWithOk2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
