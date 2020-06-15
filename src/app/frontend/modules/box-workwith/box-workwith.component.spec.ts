import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWorkwithComponent } from './box-workwith.component';

describe('BoxWorkwithComponent', () => {
  let component: BoxWorkwithComponent;
  let fixture: ComponentFixture<BoxWorkwithComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWorkwithComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWorkwithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
