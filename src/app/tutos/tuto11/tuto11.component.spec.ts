import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto11Component } from './tuto11.component';

describe('Tuto11Component', () => {
  let component: Tuto11Component;
  let fixture: ComponentFixture<Tuto11Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto11Component]
    });
    fixture = TestBed.createComponent(Tuto11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
