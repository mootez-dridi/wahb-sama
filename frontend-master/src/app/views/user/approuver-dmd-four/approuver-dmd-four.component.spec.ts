import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprouverDmdFourComponent } from './approuver-dmd-four.component';

describe('ApprouverDmdFourComponent', () => {
  let component: ApprouverDmdFourComponent;
  let fixture: ComponentFixture<ApprouverDmdFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprouverDmdFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprouverDmdFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
