import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationseAttComponent } from './demande-fourniture-att.component';

describe('ReclamationseAttComponent', () => {
  let component: ReclamationseAttComponent;
  let fixture: ComponentFixture<ReclamationseAttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationseAttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationseAttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
