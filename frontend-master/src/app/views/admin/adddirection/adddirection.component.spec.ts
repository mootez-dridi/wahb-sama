import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddirectionComponent } from './adddirection.component';

describe('AdddirectionComponent', () => {
  let component: AdddirectionComponent;
  let fixture: ComponentFixture<AdddirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddirectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
