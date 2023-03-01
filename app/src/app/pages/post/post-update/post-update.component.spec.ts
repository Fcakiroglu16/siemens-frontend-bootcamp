import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostUpdateComponent } from './post-update.component';

describe('PostUpdateComponent', () => {
  let component: PostUpdateComponent;
  let fixture: ComponentFixture<PostUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
