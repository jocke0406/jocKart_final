import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto10Component } from './tuto10.component';

describe('Tuto10Component', () => {
  let component: Tuto10Component;
  let fixture: ComponentFixture<Tuto10Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto10Component]
    });
    fixture = TestBed.createComponent(Tuto10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
