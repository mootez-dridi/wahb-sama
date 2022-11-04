import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlltypesdemandesComponent } from './alltypesdemandes.component';

describe('AlltypesdemandesComponent', () => {
  let component: AlltypesdemandesComponent;
  let fixture: ComponentFixture<AlltypesdemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlltypesdemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlltypesdemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
