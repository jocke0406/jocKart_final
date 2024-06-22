import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto4Component } from './tuto4.component';

describe('Tuto4Component', () => {
  let component: Tuto4Component;
  let fixture: ComponentFixture<Tuto4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto4Component]
    });
    fixture = TestBed.createComponent(Tuto4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
