import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetialsPage } from './movie-detials.page';

describe('MovieDetialsPage', () => {
  let component: MovieDetialsPage;
  let fixture: ComponentFixture<MovieDetialsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDetialsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieDetialsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
