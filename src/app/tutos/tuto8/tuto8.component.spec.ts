import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto8Component } from './tuto8.component';

describe('Tuto8Component', () => {
  let component: Tuto8Component;
  let fixture: ComponentFixture<Tuto8Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto8Component]
    });
    fixture = TestBed.createComponent(Tuto8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
