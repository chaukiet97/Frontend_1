import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTestmonialComponent } from './box-testmonial.component';

describe('BoxTestmonialComponent', () => {
  let component: BoxTestmonialComponent;
  let fixture: ComponentFixture<BoxTestmonialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTestmonialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTestmonialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
