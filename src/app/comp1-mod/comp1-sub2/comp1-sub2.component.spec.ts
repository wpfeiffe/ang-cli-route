import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1Sub2Component } from './comp1-sub2.component';

describe('Comp1Sub2Component', () => {
  let component: Comp1Sub2Component;
  let fixture: ComponentFixture<Comp1Sub2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1Sub2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1Sub2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
