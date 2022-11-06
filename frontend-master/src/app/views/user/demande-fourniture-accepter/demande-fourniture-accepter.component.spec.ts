import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationseAccepterComponent } from './demande-fourniture-accepter.component';

describe('ReclamationseAccepterComponent', () => {
  let component: ReclamationseAccepterComponent;
  let fixture: ComponentFixture<ReclamationseAccepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationseAccepterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationseAccepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
