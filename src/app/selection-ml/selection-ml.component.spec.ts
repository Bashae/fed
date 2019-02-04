import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionMlComponent } from './selection-ml.component';

describe('SelectionMlComponent', () => {
  let component: SelectionMlComponent;
  let fixture: ComponentFixture<SelectionMlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionMlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionMlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
