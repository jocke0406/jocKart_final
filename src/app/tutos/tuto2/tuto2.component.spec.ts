import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto2Component } from './tuto2.component';

describe('Tuto2Component', () => {
  let component: Tuto2Component;
  let fixture: ComponentFixture<Tuto2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto2Component]
    });
    fixture = TestBed.createComponent(Tuto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
