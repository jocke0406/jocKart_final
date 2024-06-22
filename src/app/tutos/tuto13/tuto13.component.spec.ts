import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto13Component } from './tuto13.component';

describe('Tuto13Component', () => {
  let component: Tuto13Component;
  let fixture: ComponentFixture<Tuto13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto13Component]
    });
    fixture = TestBed.createComponent(Tuto13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
