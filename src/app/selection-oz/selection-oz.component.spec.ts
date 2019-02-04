import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionOzComponent } from './selection-oz.component';

describe('SelectionOzComponent', () => {
  let component: SelectionOzComponent;
  let fixture: ComponentFixture<SelectionOzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectionOzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectionOzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
