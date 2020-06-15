import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCounterComponent } from './box-counter.component';

describe('BoxCounterComponent', () => {
  let component: BoxCounterComponent;
  let fixture: ComponentFixture<BoxCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
