import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMonthComponent } from './start-month.component';

describe('StartMonthComponent', () => {
  let component: StartMonthComponent;
  let fixture: ComponentFixture<StartMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartMonthComponent]
    });
    fixture = TestBed.createComponent(StartMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
