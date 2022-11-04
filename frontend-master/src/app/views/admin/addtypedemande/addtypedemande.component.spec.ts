import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtypedemandeComponent } from './addtypedemande.component';

describe('AddtypedemandeComponent', () => {
  let component: AddtypedemandeComponent;
  let fixture: ComponentFixture<AddtypedemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtypedemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtypedemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
