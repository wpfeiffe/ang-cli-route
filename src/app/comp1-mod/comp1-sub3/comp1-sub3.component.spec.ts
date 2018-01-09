import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Sub3Component } from './comp1-sub3.component';

describe('Comp1Sub3Component', () => {
  let component: Comp1Sub3Component;
  let fixture: ComponentFixture<Comp1Sub3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Sub3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Sub3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
