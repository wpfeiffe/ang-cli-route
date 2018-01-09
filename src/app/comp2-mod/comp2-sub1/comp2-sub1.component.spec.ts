import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2Sub1Component } from './comp2-sub1.component';

describe('Comp2Sub1Component', () => {
  let component: Comp2Sub1Component;
  let fixture: ComponentFixture<Comp2Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
