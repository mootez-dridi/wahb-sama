import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFournitureAccepterComponent } from './demande-fourniture-accepter.component';

describe('DemandeFournitureAccepterComponent', () => {
  let component: DemandeFournitureAccepterComponent;
  let fixture: ComponentFixture<DemandeFournitureAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFournitureAccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFournitureAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
