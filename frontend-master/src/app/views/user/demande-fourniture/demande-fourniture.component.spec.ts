import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationseComponent } from './demande-fourniture.component';

describe('ReclamationseComponent', () => {
  let component: ReclamationseComponent;
  let fixture: ComponentFixture<ReclamationseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
