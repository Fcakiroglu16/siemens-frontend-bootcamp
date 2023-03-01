import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContainerAndTemplateComponent } from './ng-container-and-template.component';

describe('NgContainerAndTemplateComponent', () => {
  let component: NgContainerAndTemplateComponent;
  let fixture: ComponentFixture<NgContainerAndTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContainerAndTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgContainerAndTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
