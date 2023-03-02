import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublisherComponent } from './publisher.component';

describe('PublisherComponent', () => {
  let component: PublisherComponent;
  let fixture: ComponentFixture<PublisherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublisherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublisherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
