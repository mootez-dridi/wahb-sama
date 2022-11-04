import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprobationDmdFourComponent } from './approbation-dmd-four.component';

describe('ApprobationDmdFourComponent', () => {
  let component: ApprobationDmdFourComponent;
  let fixture: ComponentFixture<ApprobationDmdFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprobationDmdFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprobationDmdFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
