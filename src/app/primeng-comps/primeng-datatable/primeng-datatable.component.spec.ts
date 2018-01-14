import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDatatableComponent } from './primeng-datatable.component';

describe('PrimengDatatableComponent', () => {
  let component: PrimengDatatableComponent;
  let fixture: ComponentFixture<PrimengDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
