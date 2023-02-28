import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProductnameComponent } from './ShowProductnameComponent';

describe('ShowProductnameComponent', () => {
  let component: ShowProductnameComponent;
  let fixture: ComponentFixture<ShowProductnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowProductnameComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShowProductnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
