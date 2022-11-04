import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFournitureRefComponent } from './demande-fourniture-ref.component';

describe('DemandeFournitureRefComponent', () => {
  let component: DemandeFournitureRefComponent;
  let fixture: ComponentFixture<DemandeFournitureRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFournitureRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFournitureRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
