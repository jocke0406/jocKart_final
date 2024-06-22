import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto6Component } from './tuto6.component';

describe('Tuto6Component', () => {
  let component: Tuto6Component;
  let fixture: ComponentFixture<Tuto6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto6Component]
    });
    fixture = TestBed.createComponent(Tuto6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
