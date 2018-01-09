import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Sub1Component } from './comp1-sub1.component';

describe('Comp1Sub1Component', () => {
  let component: Comp1Sub1Component;
  let fixture: ComponentFixture<Comp1Sub1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Sub1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Sub1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
