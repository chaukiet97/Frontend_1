import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxBrandComponent } from './box-brand.component';

describe('BoxBrandComponent', () => {
  let component: BoxBrandComponent;
  let fixture: ComponentFixture<BoxBrandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxBrandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
