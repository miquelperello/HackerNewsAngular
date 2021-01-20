import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Info_userComponent } from './info_user.component';

describe('Info_UserComponent', () => {
  let component: Info_userComponent;
  let fixture: ComponentFixture<Info_userComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Info_userComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Info_userComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
