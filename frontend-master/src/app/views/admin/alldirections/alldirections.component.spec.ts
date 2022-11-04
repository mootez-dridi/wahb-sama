import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldirectionsComponent } from './alldirections.component';

describe('AlldirectionsComponent', () => {
  let component: AlldirectionsComponent;
  let fixture: ComponentFixture<AlldirectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlldirectionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
