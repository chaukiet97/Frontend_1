import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTeammemberComponent } from './box-teammember.component';

describe('BoxTeammemberComponent', () => {
  let component: BoxTeammemberComponent;
  let fixture: ComponentFixture<BoxTeammemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxTeammemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTeammemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
