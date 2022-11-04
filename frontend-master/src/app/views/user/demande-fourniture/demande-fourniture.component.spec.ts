import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeFournitureComponent } from './demande-fourniture.component';

describe('DemandeFournitureComponent', () => {
  let component: DemandeFournitureComponent;
  let fixture: ComponentFixture<DemandeFournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeFournitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeFournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
