import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tuto12Component } from './tuto12.component';

describe('Tuto12Component', () => {
  let component: Tuto12Component;
  let fixture: ComponentFixture<Tuto12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tuto12Component]
    });
    fixture = TestBed.createComponent(Tuto12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
