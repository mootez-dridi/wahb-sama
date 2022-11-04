import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtechnoComponent } from './addtechno.component';

describe('AddtechnoComponent', () => {
  let component: AddtechnoComponent;
  let fixture: ComponentFixture<AddtechnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtechnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtechnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
