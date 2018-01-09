import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2Sub2Component } from './comp2-sub2.component';

describe('Comp2Sub2Component', () => {
  let component: Comp2Sub2Component;
  let fixture: ComponentFixture<Comp2Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
