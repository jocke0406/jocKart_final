import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto7Component } from './tuto7.component';

describe('Tuto7Component', () => {
  let component: Tuto7Component;
  let fixture: ComponentFixture<Tuto7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto7Component]
    });
    fixture = TestBed.createComponent(Tuto7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
