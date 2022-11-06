import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReclamationseComponent } from './add-demande-fourniture.component';

describe('AddReclamationseComponent', () => {
  let component: AddReclamationseComponent;
  let fixture: ComponentFixture<AddReclamationseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddReclamationseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReclamationseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
