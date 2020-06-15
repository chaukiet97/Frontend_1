import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxNewslaterComponent } from './box-newslater.component';

describe('BoxNewslaterComponent', () => {
  let component: BoxNewslaterComponent;
  let fixture: ComponentFixture<BoxNewslaterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxNewslaterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxNewslaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
