import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListWithOkComponent } from './product-list-with-ok.component';

describe('ProductListWithOkComponent', () => {
  let component: ProductListWithOkComponent;
  let fixture: ComponentFixture<ProductListWithOkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductListWithOkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductListWithOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
