import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxProjectComponent } from './box-project.component';

describe('BoxProjectComponent', () => {
  let component: BoxProjectComponent;
  let fixture: ComponentFixture<BoxProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
