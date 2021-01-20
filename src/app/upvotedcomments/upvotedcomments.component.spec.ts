import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpvotedcommentsComponent } from './upvotedcomments.component';

describe('UpvotedcommentsComponent', () => {
  let component: UpvotedcommentsComponent;
  let fixture: ComponentFixture<UpvotedcommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpvotedcommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpvotedcommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
