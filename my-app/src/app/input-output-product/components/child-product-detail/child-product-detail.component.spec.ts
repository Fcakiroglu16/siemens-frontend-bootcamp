import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildProductDetailComponent } from './child-product-detail.component';

describe('ChildProductDetailComponent', () => {
  let component: ChildProductDetailComponent;
  let fixture: ComponentFixture<ChildProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildProductDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
