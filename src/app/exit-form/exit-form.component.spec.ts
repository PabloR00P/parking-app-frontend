import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitFormComponent } from './exit-form.component';

describe('ExitMonthComponent', () => {
  let component: ExitFormComponent;
  let fixture: ComponentFixture<ExitFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExitFormComponent]
    });
    fixture = TestBed.createComponent(ExitFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
