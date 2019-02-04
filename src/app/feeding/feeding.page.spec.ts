import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedingPage } from './feeding.page';

describe('FeedingPage', () => {
  let component: FeedingPage;
  let fixture: ComponentFixture<FeedingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
