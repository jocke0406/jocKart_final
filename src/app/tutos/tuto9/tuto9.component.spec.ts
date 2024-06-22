import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto9Component } from './tuto9.component';

describe('Tuto9Component', () => {
  let component: Tuto9Component;
  let fixture: ComponentFixture<Tuto9Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto9Component]
    });
    fixture = TestBed.createComponent(Tuto9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
