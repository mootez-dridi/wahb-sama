import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFournitureAttComponent } from './demande-fourniture-att.component';

describe('DemandeFournitureAttComponent', () => {
  let component: DemandeFournitureAttComponent;
  let fixture: ComponentFixture<DemandeFournitureAttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFournitureAttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFournitureAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
