import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto5Component } from './tuto5.component';

describe('Tuto5Component', () => {
  let component: Tuto5Component;
  let fixture: ComponentFixture<Tuto5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto5Component]
    });
    fixture = TestBed.createComponent(Tuto5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
