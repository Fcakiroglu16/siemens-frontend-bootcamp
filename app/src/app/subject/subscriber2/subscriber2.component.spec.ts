import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subscriber2Component } from './subscriber2.component';

describe('Subscriber2Component', () => {
  let component: Subscriber2Component;
  let fixture: ComponentFixture<Subscriber2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subscriber2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Subscriber2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
