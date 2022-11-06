import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationseApprouverComponent } from './demande-fourniture-approuver.component';

describe('ReclamationseApprouverComponent', () => {
  let component: ReclamationseApprouverComponent;
  let fixture: ComponentFixture<ReclamationseApprouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationseApprouverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationseApprouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
