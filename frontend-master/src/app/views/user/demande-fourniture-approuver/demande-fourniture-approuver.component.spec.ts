import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFournitureApprouverComponent } from './demande-fourniture-approuver.component';

describe('DemandeFournitureApprouverComponent', () => {
  let component: DemandeFournitureApprouverComponent;
  let fixture: ComponentFixture<DemandeFournitureApprouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFournitureApprouverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFournitureApprouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
