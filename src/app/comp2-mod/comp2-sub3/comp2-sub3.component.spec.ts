import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2Sub3Component } from './comp2-sub3.component';

describe('Comp2Sub3Component', () => {
  let component: Comp2Sub3Component;
  let fixture: ComponentFixture<Comp2Sub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2Sub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
