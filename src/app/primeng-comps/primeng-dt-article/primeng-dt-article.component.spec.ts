import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengDtArticleComponent } from './primeng-dt-article.component';

describe('PrimengDtArticleComponent', () => {
  let component: PrimengDtArticleComponent;
  let fixture: ComponentFixture<PrimengDtArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimengDtArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimengDtArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
