import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto1Component } from './tuto1.component';

describe('Tuto1Component', () => {
  let component: Tuto1Component;
  let fixture: ComponentFixture<Tuto1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto1Component]
    });
    fixture = TestBed.createComponent(Tuto1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
