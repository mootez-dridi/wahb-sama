import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandeFournitureComponent } from './add-demande-fourniture.component';

describe('AddDemandeFournitureComponent', () => {
  let component: AddDemandeFournitureComponent;
  let fixture: ComponentFixture<AddDemandeFournitureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandeFournitureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandeFournitureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
