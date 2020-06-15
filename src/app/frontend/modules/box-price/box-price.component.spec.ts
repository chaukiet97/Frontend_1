import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPriceComponent } from './box-price.component';

describe('BoxPriceComponent', () => {
  let component: BoxPriceComponent;
  let fixture: ComponentFixture<BoxPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
