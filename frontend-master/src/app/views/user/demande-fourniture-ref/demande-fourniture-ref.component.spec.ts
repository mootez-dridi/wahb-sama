import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationseRefComponent } from './demande-fourniture-ref.component';

describe('ReclamationseRefComponent', () => {
  let component: ReclamationseRefComponent;
  let fixture: ComponentFixture<ReclamationseRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationseRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationseRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
