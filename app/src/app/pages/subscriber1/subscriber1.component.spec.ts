import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriber1Component } from './subscriber1.component';

describe('Subscriber1Component', () => {
  let component: Subscriber1Component;
  let fixture: ComponentFixture<Subscriber1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subscriber1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscriber1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
