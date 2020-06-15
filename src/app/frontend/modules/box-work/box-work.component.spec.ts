import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWorkComponent } from './box-work.component';

describe('BoxWorkComponent', () => {
  let component: BoxWorkComponent;
  let fixture: ComponentFixture<BoxWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxWorkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
